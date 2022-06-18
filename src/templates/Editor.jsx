import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { EditorState } from "draft-js"

import { EditorTitle } from "../components/editor/fields/EditorTitle"
import { EditorDescription } from "../components/editor/fields/EditorDescription"
import { EditorWriter } from "../components/editor/fields/EditorWriter"
import { EditorScore } from "../components/editor/fields/EditorScore"
import { EditorWYSIWYG } from "../components/editor/fields/EditorWYSIWYG"
import { EditorDesigners } from "../components/editor/fields/EditorDesigners"
import { EditorPlayingTime } from "../components/editor/fields/EditorPlayingTime"
import { EditorPlayingTimeOfficial } from "../components/editor/fields/EditorPlayingTimeOfficial"
import { EditorMechanism } from "../components/editor/fields/EditorMechanism"
import { EditorPublisher } from "../components/editor/fields/EditorPublisher"
import { EditorImages } from "../components/editor/fields/EditorImages"
import { EditorDownloader } from "../components/editor/fields/EditorDownloader"
import { EditorWeight } from "../components/editor/fields/EditorWeight"
import { EditorPlayerCount } from "../components/editor/fields/EditorPlayerCount"
import { EditorPlayerCountOfficial } from "../components/editor/fields/EditorPlayerCountOfficial"
import { EditorComplexity } from "../components/editor/fields/EditorComplexity"
import { EditorPreparation } from "../components/editor/fields/EditorPreparation"
import { EditorLuck } from "../components/editor/fields/EditorLuck"
import { EditorLongevity } from "../components/editor/fields/EditorLongevity"
import { EditorComponents } from "../components/editor/fields/EditorComponents"
import { EditorPortability } from "../components/editor/fields/EditorPortability"

const MyForm = ({ data, location, pageContext }) => {
  const siteMeta = data.site.siteMetadata,
    metaTitle = `Nuova recensione | ${siteMeta.title}`,
    [title, setTitle] = useState(""),
    [writer, setWriter] = useState(null),
    [mechanisms, setMechanisms] = useState([]),
    [designers, setDesigners] = useState([]),
    [publishers, setPublishers] = useState([]),
    [description, setDescription] = useState(""),
    [score, setScore] = useState(1),
    [playingTime, setPlayingTime] = useState(""),
    [playingTimeOfficial, setPlayingTimeOfficial] = useState(""),
    [weight, setWeight] = useState(1),
    [playerCount, setPlayerCount] = useState(),
    [playerCountOfficial, setPlayerCountOfficial] = useState(""),
    [complexity, setComplexity] = useState(1),
    [preparation, setPreparation] = useState(1),
    [luck, setLuck] = useState(1),
    [longevity, setLongevity] = useState(1),
    [components, setComponents] = useState(1),
    [portability, setPortability] = useState(1),
    [setting, setSetting] = useState(EditorState.createEmpty()),
    [rules, setRules] = useState(EditorState.createEmpty()),
    [feedback, setFeedback] = useState(EditorState.createEmpty()),
    [files, setFiles] = useState([])

  return (
    <Layout location={location} title={title}>
      <Helmet>
        <title>{metaTitle}</title>
      </Helmet>

      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <h1 className="my-5">Nuova recensione</h1>

            <Form className="mb-5">
              <EditorWriter
                setValue={setWriter}
                allowedValues={siteMeta.authors}
              />

              <h2 className="mt-5">Header</h2>

              <EditorTitle value={title} setValue={setTitle} />
              <EditorDesigners setValue={setDesigners} />
              <EditorPublisher setValue={setPublishers} />
              <EditorDescription
                value={description}
                setValue={setDescription}
              />

              <h2 className="mt-5">Box</h2>
              <EditorScore value={score} setValue={setScore} />
              <EditorPlayingTime
                value={playingTime}
                setValue={setPlayingTime}
              />
              <EditorPlayingTimeOfficial
                value={playingTimeOfficial}
                setValue={setPlayingTimeOfficial}
              />
              <EditorWeight value={weight} setValue={setWeight} />
              <EditorPlayerCount
                value={playerCount}
                setValue={setPlayerCount}
              />
              <EditorPlayerCountOfficial
                value={playerCountOfficial}
                setValue={setPlayerCountOfficial}
              />

              <h2 className="mt-5">Sidebar</h2>

              <EditorMechanism
                setValue={setMechanisms}
                allowedValues={pageContext.mechanisms}
              />

              <EditorComplexity setValue={setComplexity} value={complexity} />

              <EditorPreparation
                setValue={setPreparation}
                value={preparation}
              />
              <EditorLuck setValue={setLuck} value={luck} />
              <EditorLongevity setValue={setLongevity} value={longevity} />
              <EditorComponents setValue={setComponents} value={components} />
              <EditorPortability
                setValue={setPortability}
                value={portability}
              />

              <h2 className="mt-5">Contenuto</h2>

              <EditorWYSIWYG
                name="Ambientazione"
                value={setting}
                setValue={setSetting}
              />
              <EditorWYSIWYG
                name="Regole in breve"
                value={rules}
                setValue={setRules}
              />
              <EditorWYSIWYG
                name="Impressioni"
                value={feedback}
                setValue={setFeedback}
              />
              <EditorImages value={files} setValue={setFiles} />

              <div className="mt-5 text-center">
                <EditorDownloader
                  title={title}
                  writer={writer}
                  mechanisms={mechanisms}
                  publishers={publishers}
                  designers={designers}
                  description={description}
                  playingTime={playingTime}
                  playingTimeOfficial={playingTimeOfficial}
                  score={score}
                  weight={weight}
                  playerCount={playerCount}
                  playerCountOfficial={playerCountOfficial}
                  complexity={complexity}
                  preparation={preparation}
                  luck={luck}
                  longevity={longevity}
                  components={components}
                  portability={portability}
                  setting={setting}
                  rules={rules}
                  feedback={feedback}
                  files={files}
                />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default MyForm

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        authors {
          name
        }
      }
    }
  }
`
