import React from "react";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";


const NewsPage = ({ data }) => {
  const posts = data.allPosts.edges;

  return (
    <main className="relative min-h-screen bg-white">
      <div className="pb-[500px] md:pb-[350px]">
        <Navigation />
        <div className="relative w-full h-screen md:h-[600px]">
          <StaticImage className="w-full h-full" imgClassName="object-cover h-full" src="../images/image-contact.jpg" alt="Portfolio" />
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <h1 className="font-bold text-2xl lg:text-5xl text-center mb-5">PASSION NEWS</h1>
            </div>
          </div>
        </div>

        <div className="relative inline-flex justify-center w-full">
          <div className="flex flex-col w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
            <div className="text-left text-xl font-bold mb-10">Latest News</div>
            
            {
              posts.map((post, i) => {
                const { title, date, desc, tags, slug, thumbnail } = post.node.frontmatter;

                return(
                  <a href={`/news${slug}`} key={i} className="flex flex-row rounded-xl shadow-xl overflow-hidden w-full cursor-pointer mb-10">
                    <GatsbyImage className="w-96 h-60 shrink-0" 
                      image={getImage(thumbnail?.childImageSharp.gatsbyImageData)} alt={title}/>
                    <div className="flex flex-col justify-center p-10">
                      <div className="text-gray-500">{date}</div>
                      <div className="text-xl font-bold mb-5">{title}</div>
                      <p className="text-gray-500">{desc}</p>
                      <a href={`/news${slug}`} className="text-sky-500">Read More..</a>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
export default NewsPage;
export const query = graphql`
query NewsPage {
  allPosts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        frontmatter {
          title
          date
          desc
          tags
          slug
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}
`;