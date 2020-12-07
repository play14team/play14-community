import React from 'react'
import { Link } from 'gatsby'
import Image from "gatsby-image"
import starIcon from '../../assets/images/star-icon.png'
import user1 from '../../assets/images/user1.jpg'

import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        title
        slug
        content
        image {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
        author
        date
      }
    }
  }
`

const OurBlog = () => {
    const data = useStaticQuery(query)
    const {
        allStrapiBlogs: { nodes: blogs },
      } = data
    return (
        <section className="blog-area pt-100 pb-70 bg-fffbf5">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="blog" /> 
                        Our Blog
                    </span>
                    <h2>Latest Valuable Insights</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    {
                        blogs.map((blog, idx) => {
                            return(
                                <div className="col-lg-4 col-md-6" key={idx}>
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link to={`/blogs/${blog.slug}`}>
                                                <Image fluid={blog.image.childImageSharp.fluid} />
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <ul className="post-meta d-flex justify-content-between align-items-center">
                                                <li>
                                                    <div className="post-author d-flex align-items-center">
                                                        <img src={user1} className="rounded-circle" alt="blog" />
                                                        <span>{blog.author}</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className='flaticon-calendar'></i> {blog.date}
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link to={`/blogs/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default OurBlog