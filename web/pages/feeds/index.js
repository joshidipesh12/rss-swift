import { Button, Card, Col, Container, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../Layouts/Layout";
import config from "../../config.json";

function Home() {
  const { categories, providers } = config;
  const router = useRouter();
  return (
    <Container css={{ minHeight: "100vh", width: "100vw" }}>
      <Text
        h1
        size={60}
        css={{
          fontFamily: "Bebas Neue",
          textAlign: "center",
          marginTop: "1em",
          letterSpacing: "$wide",
        }}>
        Top RSS Providers
      </Text>
      {categories.map(category => {
        const provider = providers.filter(p => p.category === category);
        return (
          <section key={category}>
            <Text h3 css={{ fontSize: "$2xl", textTransform: "capitalize" }}>
              {category}
            </Text>
            <div className="card_section_container">
              <div className="card_list_container">
                {provider.map(p => (
                  <Card
                    isHoverable
                    isPressable
                    variant="flat"
                    key={p.name}
                    css={{ height: "$5xl", minWidth: "$6xl" }}
                    onClick={() => {
                      router.push(
                        `/feeds/${encodeURIComponent(p.rss_url)}?category=${
                          p.category
                        }`,
                      );
                    }}>
                    <Card.Image
                      src={p.logo}
                      objectFit="cover"
                      width="100%"
                      height="100%"
                      alt={p.name}
                      loading="lazy"
                    />
                    <Card.Footer
                      isBlurred
                      css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        bottom: 0,
                      }}>
                      <Row justify="space-between">
                        <Text color="#fff" size={12}>
                          {p.name}
                        </Text>
                      </Row>
                    </Card.Footer>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <style jsx>{`
        .card_section_container {
          max-width: 100%;
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow: auto;
          -webkit-mask-image: linear-gradient(
            to left,
            transparent 1%,
            black 2% transparent 1%
          );
          mask-image: linear-gradient(to left, transparent 1%, black 2%);
        }
        .card_list_container {
          display: flex;
          gap: 2rem;
          padding-block: 2rem;
        }
        .card_section_container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </Container>
  );
}

Home.Layout = Layout;

export default Home;
