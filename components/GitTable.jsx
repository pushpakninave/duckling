'use client'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion";
import Tags from "./Tags";
import { FaExternalLinkAlt, FaForward } from "react-icons/fa";

const GitTable = ({ repositoriesInfo }) => {
    const sortedRepos = repositoriesInfo.nodes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.5, duration: 0.8, ease: "easeIn" }
            }}
            className="min-h-[80v] flex items-center justify-center py-12 xl:py-6"
        >
            <div>
                <Table>
                    <TableCaption>A list of your recently worked repositories.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead >Year</TableHead>
                            <TableHead>Project</TableHead>
                            <TableHead className="hidden xl:table-cell">Built With</TableHead>
                            <TableHead className="hidden lg:table-cell xl:table-cell">Description</TableHead>
                            <TableHead className="text-right">Repo's Link</TableHead>
                        </TableRow>
                    </TableHeader>
                    {
                        sortedRepos.map((repo, index) => {
                            return (
                                <TableBody key={index}>
                                    <TableRow>
                                        <TableCell className="font-medium">{new Date(repo.updatedAt).getFullYear()}</TableCell>
                                        <TableCell>{repo.name}</TableCell>
                                        <TableCell className="hidden xl:table-cell">
                                            <Tags tagInfo={repo.repositoryTopics.nodes} />
                                        </TableCell>
                                        <TableCell className="hidden lg:table-cell xl:table-cell">
                                            {repo.description}
                                        </TableCell>
                                        <TableCell className="flex justify-end cursor-pointer hover:scale-105 transition-transform duration-300">
                                            <a href={repo.url} target="_blank">
                                                <FaExternalLinkAlt />
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            );
                        })
                    }
                </Table>
            </div>
        </motion.div>
    )
}

export default GitTable