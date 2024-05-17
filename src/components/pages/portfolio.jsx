import { useState, useEffect } from "react";
import PortfolioModal from "../modal/portfolioModal";
import { ClipLoader } from "react-spinners";

function Portfolio() {  
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [chosenProjectId, setChosenProjectId] = useState(null);

    const url = 'https://api.github.com/users/idris-ahmed19/repos';

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {          
            setTimeout(() => {
                setRepos(data);
                setIsLoading(false);
            }, 800)
        })
    }, []);

    if(isLoading) {
        return <ClipLoader className="loading-icon" color="#0000FF" />
    } 

    return (
        <section className="page-content">
            <h1>Portfolio</h1>
            <ul className="ul-portfolio">
            {
                repos.map((repo) => {
                    return (
                        <li className="project-card" key={repo.id}>
                            <h2>{repo.name}</h2>
                            <div className="div-show-more">
                                <button className="show-more-button" onClick={() => {
                                    setIsModalOpen(true)
                                    setChosenProjectId(repo.id)
                                    }}>
                                    Show more
                                </button>
                                {chosenProjectId !== null && chosenProjectId === repo.id ? isModalOpen && <PortfolioModal setIsModalOpen={setIsModalOpen} repo={repo}/> : null}
                            </div>
                        </li>
                )})
            }
            </ul>
        </section>
    )
}

export default Portfolio;