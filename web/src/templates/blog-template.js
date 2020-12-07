import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import BlogSidebar from '../components/BlogContent/BlogSidebar'
import Footer from "../components/App/Footer"

const ComponentName = ({ data }) => {
  const { title, content } = data.blog
  return (
    <Layout>
        <Navbar />
        <PageBanner
            pageTitle="Blog Details" 
            homePageText="Home" 
            homePageUrl="/" 
            activePageText={title}
        /> 
        <section className="blog-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-details-desc">
                            <ReactMarkdown source={content} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      title
      content
    }
  }
`

export default ComponentName
