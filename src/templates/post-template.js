import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";


const PostTemplate = ({ data }) => {

  const post = data.markdownRemark;
  const { title, date, desc, tags, slug, thumbnail } = post.frontmatter;

  return(
    <main className="relative min-h-screen bg-white">
      <div className="pb-[500px] md:pb-[350px]">
        <Navigation />
        <div className="relative w-full h-screen md:h-[600px]">
          <GatsbyImage className="w-full h-full" imgClassName="object-cover h-full" 
            image={getImage(thumbnail?.childImageSharp.gatsbyImageData)} alt={title} />
        </div>

        <div className="relative inline-flex justify-center w-full">
          <div className="flex flex-col w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
            <div className="post mb-10">
              <div className="post-date">{date}</div>
              <h1 className="post-title">{title}</h1>

              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>

            <a href="/news" className="text-sky-500 font-bold">Back to News</a>
          </div>
        </div>


      </div>
      <Footer />
    </main>

  );

}
export default PostTemplate;
export const query = graphql`
query getPost($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug} }) {
        frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            desc
            tags
            slug
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
        }
        html
    }
}
`;