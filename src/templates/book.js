import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

export default ({ data }) => {
  const book = data.sampleCsv;
  return (
    <Layout>
      <div>
        <h1>{book.title}</h1>
        <p>購入日：{book.purchaseDate}</p>
        <p>読了日：{book.finishDate}</p>
        {book.mediumImageUrl &&
          <a href={book.linkUrl}><img src={book.mediumImageUrl}/></a>
        }
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    sampleCsv(fields: { slug: { eq: $slug } }) {
      title
      purchaseDate
      finishDate
      linkUrl
      mediumImageUrl
    }
  }
`;
