import React from "react"
import { BsBook } from "react-icons/bs"
import { FaCodeBranch, FaDownload, FaStar } from "react-icons/fa"
import { TbPageBreak } from "react-icons/tb"
import { VscCommentDiscussion, VscIssues, VscProject } from "react-icons/vsc"
import { truncate } from "../utils"
import "./repo-card.css"

interface RepoCardProps {
  content: Repo
  handler: (r: Repo) => void
}

const RepoCard: React.FC<RepoCardProps> = ({ content, handler }) => {
  return (
    <div className='repo' onClick={() => handler(content)}>
      <div className='header'>
        <h1 className='name'>{content.name}</h1>
        <h2 className='fullname'>{content.full_name}</h2>
      </div>
      <div className='content'>
        <p className='description'>{truncate(content.description, 72)}</p>
        <div className='data'>
          <img
            src={content.owner.avatar_url}
            alt={`avatar for ${content.full_name}`}
            className='avatar'
          />
          <ul className='stats'>
            <li className='item'>
              <p>
                {import.meta.env.VITE_GOD_MODE === "true"
                  ? content.stargazers_count
                  : "?????..."}
              </p>
              {/* <p>????...</p> */}
              <FaStar />
            </li>
            <li className='item'>
              <p>{content.forks_count}</p>
              <FaCodeBranch />
            </li>
            <div className='booleans'>
              <li className='item'>
                <TbPageBreak className={`item-${content.has_pages}`} />
              </li>
              <li className='item'>
                <VscIssues className={`item-${content.has_issues}`} />
              </li>
              <li className='item'>
                <VscCommentDiscussion
                  className={`item-${content.has_discussions}`}
                />
              </li>
              <li className='item'>
                <BsBook className={`item-${content.has_wiki}`} />
              </li>
              <li className='item'>
                <FaDownload className={`item-${content.has_downloads}`} />
              </li>
              <li className='item'>
                <VscProject className={`item-${content.has_projects}`} />
              </li>
            </div>
            <div className='topics'>
              {content.topics.map((topic) => (
                <li className='topic' key={topic}>
                  <p>{topic}</p>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RepoCard
