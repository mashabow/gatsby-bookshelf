import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h1>本の一覧</h1>
    <table>
      <thead>
        <tr>
          <th>タイトル</th>
          <th></th>
          <th>購入日</th>
          <th>読了日</th>
        </tr>
      </thead>
      <tbody>
        {data.allSampleCsv.edges.map(({ node }, index) => (
          <tr key={index}>
            <td>
              <a href={node.fields.slug}>{node.title}</a>
            </td>
            <td>{node.linkUrl ? <a href={node.linkUrl}>Amazon</a> : '-'}</td>
            <td>{node.purchaseDate}</td>
            <td>{node.finishDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
)

export const query = graphql`
  query {
    allSampleCsv {
      edges {
        node {
          title
          linkUrl
          purchaseDate
          finishDate
          fields {
            slug
          }
        }
      }
    }
  }
`;
