/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";


const SEO = ({ title, description, keywords, image, meta }) => {

  const author = `Passion Corp Indonesia`;

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={title}
      defaultTitle={`Passion Corp Indonesia`}
      meta={[
        {
          name: `author`,
          content: author,
        },
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywords.join,
        },

        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },

        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}
export default SEO;

SEO.defaultProps = {
  title: `Passion Corp - Go Passion Go World!`,
  description: `Passion Corp is comprised of professional, compassionate and Event Planners and Assistants who love helping clients with special events.`,
  keywords: [],
  image: `https://passioncorp.id/social.png`,
  meta: [],
}