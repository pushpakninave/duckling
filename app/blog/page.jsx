
import BlogCard from "@/components/BlogCard";
import Hr from "@/components/Hr";
import MobileBlogCard from "@/components/MobileBlogCard";
import { getBlogName, getPosts } from "@/lib/requests"
import { motion } from 'framer-motion'

const Services = async () => {

  const posts = await getPosts();
  let postsArray = posts.posts;

  return (
    <div className="container mx-auto h-full">
      <div className="container mx-auto">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h1 className="text-xl xl:text-2xl mb-6 max-w-[90%] ">
            <div className="flex items-center ">
              <span className="text-accent mr-2">00. </span>
              Blogs I wrote
              <Hr/>
              <br />
              <div>
                <a href="https://aliencodes.hashnode.dev" target="_blank">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-10 xl:h-10" viewBox="0 0 337 337" fill="none">
                    <rect x="113" y="113" width="111" height="111" rx="55.5" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z" fill="#2962FF" />
                  </svg>
                </a>
              </div>
            </div>
          </h1>
          <div>
            <p className="text-cyan-500 text-xl font-semibold mb-4">{posts.domainInfo}.</p>

            <div>
              {
                postsArray.map(
                  (node, index) => {
                    return (
                      <div key={index}>
                        <div className="hidden xl:block">
                          <BlogCard key={index} postInfo={node.node} />
                        </div>
                        <div className="xl:hidden mb-10">
                          <MobileBlogCard key={index} postInfo={node.node} />
                        </div>
                      </div>
                    )
                  }
                )
              }
            </div>
              <footer>
              <div className="flex justify-center items-center mt-5 mb-10">
                <a className="flex flex-col justify-center items-center" href="https://aliencodes.hashnode.dev" target="_blank">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-10 xl:h-10" viewBox="0 0 337 337" fill="none">
                    <rect x="113" y="113" width="111" height="111" rx="55.5" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z" fill="#2962FF" />
                  </svg>
                  <p className="mt-2">Blog Profile</p>
                </a>
              </div>
              </footer>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services