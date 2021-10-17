import CardBlog from '../components/CardBlog'
import CategoryWidget from '../components/CategoryWidget'
import News from '../components/News'
import SearchWidget from '../components/SearchWidget'
import BlogWidget from '../components/BlogWidget'
import TagWidget from '../components/TagWidget'
import InstagramWidget from '../components/InstagramWidget'
import NewLetterWidget from '../components/NewLetterWidget'
import { useEffect, useState } from 'react'
import Apis, { endpoints } from '../configs/Apis'
import Bradcam from '../components/Bradcam'

import '../css/about.css'
import '../css/contact.css'
import '../css/blog.css'

function Blogspage() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        loadBlogs()
    }, [])


    const loadBlogs = async () => {
        try {
            let res = await Apis.get(endpoints["blogs"])
            console.log(res.data)

            setBlogs(res.data.results)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div id="main">
            <Bradcam title="Tin tức" heading="Cuộc đời là những chuyến đi Trải nghiệm Khám Phá chính bản thân mình" />
            <section class="travel-main blog">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-8">
                            <div class="blog__left-sidebar">
                                {
                                    blogs.map(blog => <CardBlog blog={blog} />)
                                }
                            </div>
                        </div>
                        <div class="col col-lg-4">
                            <div class="blog__right-sidebar">
                                <SearchWidget />
                                <CategoryWidget />
                                <BlogWidget />
                                <TagWidget />
                                <InstagramWidget />
                                <NewLetterWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogspage