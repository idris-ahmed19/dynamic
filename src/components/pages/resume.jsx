import resumeData from '../../assets/resumeData.json'

function Resume(){
    return (
        <div className='page-content'>
            <h1>Resume</h1>

            <div className='div-resume'>
                <section className='resume-card'>
                    <h2>Work</h2>
                    <ol className='ol-resume'>
                        {
                            resumeData.work.map((work) => {
                                return (
                                    <li className='li-resume' key={work.id}>
                                        <span className='cursive'>{work.start} - {work.end}</span>
                                        <br />
                                        <span className='bold'>{work.position}</span>
                                        <br />
                                        <span>{work.name}</span>
                                        <br />
                                        <span>{work.description}</span>
                                    </li>
                                )
                            }
                        )
                        }
                    </ol>
                </section>

                <section className='resume-card'>
                    <h2>Education</h2>
                    <ol className='ol-resume'>
                        {
                            resumeData.education.map((edu) => {
                                return(
                                    <li className='li-resume' key={edu.id}>
                                        <span className='cursive'>{edu.start} - {edu.end}</span>
                                        <br />
                                        <span className='bold'>{edu.position}</span>
                                        <br /> 
                                        {edu.name}
                                    </li>
                                )
                            }
                        )
                        }
                    </ol>
                </section>
            </div>
        </div>
    )
}

export default Resume;