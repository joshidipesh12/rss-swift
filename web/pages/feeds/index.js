import { Button, Card, Col, Container, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../Layouts/Layout";
import config from "../../public/config.json";

function Home() {
  const { categories, providers } = config;
  const router = useRouter();
  return (
    <Container css={{ minHeight: "100vh", width: "100vw" }}>
      <Text
        h1
        css={{ fontSize: "$4xl", fontFamily: "Anton", textAlign: "center" }}>
        Top RSS Providers
      </Text>
      {categories.map(category => {
        const provider = providers.filter(p => p.category === category);
        return (
          <div className="card_section_container" key={category}>
            <Text h3 css={{ fontSize: "$2xl" }}>
              {category}
            </Text>
            <div className="card_list_container">
              {provider.map(p => (
                <Card
                  isHoverable
                  key={p.name}
                  css={{ height: "$5xl", minWidth: "$6xl" }}>
                  <Card.Image
                    src={p.logo}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt={p.name}
                  />
                  <Card.Footer
                    isBlurred
                    css={{
                      position: "absolute",
                      bgBlur: "#0f111466",
                      bottom: 0,
                    }}>
                    <Row justify="space-between">
                      <Text color="#fff" size={12} css={{}}>
                        {p.name}
                      </Text>
                      <Button
                        auto
                        ghost
                        rounded
                        color="gradient"
                        onClick={() => {
                          router.push(
                            `/feeds/${encodeURIComponent(p.rss_url)}`,
                          );
                        }}>
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold">
                          EXPLORE
                        </Text>
                      </Button>
                    </Row>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .card_section_container {
          min-width: 100vw;
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow: auto;
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
