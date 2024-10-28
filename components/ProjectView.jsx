import { getGitRepos } from "@/lib/requests";
import GitTable from "@/components/GitTable";
import GridView from "./GridView";
import { motion } from "framer-motion";

function ProjectView({ isGridView, repoInfo }) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.8, ease: "easeIn" }
            }}
            className="min-h-[80v] flex items-center justify-center xl:py-6"
        >
            {
                isGridView ? <GridView /> : <GitTable repositoriesInfo={repoInfo.viewer.repositories} />
            }
        </motion.div>
    )
}

export default ProjectView