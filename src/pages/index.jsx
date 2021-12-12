import React from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import GameCard from "../components/misc/GameCard"
import * as style from "./index.module.scss"

const Index = ({ data, location }) => {
  const { title, description } = data.site.siteMetadata

  return (
    <Layout location={location} title={title}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="og:type" content="website" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={withPrefix("logo/logo.png")} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={withPrefix("logo/logo.png")} />
      </Helmet>

      {/* <Search {...data.localSearchPages} location={location} /> */}
      <div style={{ minHeight: "calc(100vh - 88px)" }} className={style.index}>
        <Container className={style.welcomeTitle}>
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <h1 className="d-none">{title}</h1>
              <img
                src={withPrefix("logo/logo.svg")}
                alt="dudexpress logo"
                className="w-100"
              />
            </Col>
          </Row>
          {/* <h5>Recensioni semplici, immediate e immersive</h5> */}
        </Container>

        <div className="main-content">
          <Container className="read-more-posts pt-0">
            <Row className="game-list">
              <Col lg={{ span: 6, offset: 3 }}>
                <h1>Leggi gli ultimi articoli</h1>
                {data.allMdx.nodes.map(post => (
                  <GameCard key={post.frontmatter.title} post={post} />
                ))}
              </Col>
            </Row>
            {/* <Link to="/blog" rel="next">Scopri di più →</Link> */}
            {/* <WhoWeAre authors={data.site.siteMetadata.authors} /> */}
          </Container>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    localSearchPages {
      index
      store
    }
    site {
      siteMetadata {
        title
        description
        authors {
          name
          summary
          image
        }
      }
    }
    allMdx(limit: 20, sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          featureImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  }
`
