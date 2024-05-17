import profile_pic from "/images/profile_pic.jpg"

function Home(){
    return(
        <>
            <main className="grid-main">
                <div id="main-flex">
                    <img 
                    id="main-flex-img" 
                    src={profile_pic} 
                    alt="profile picture" 
                    />
                    <h1 className="main-head">Idris Ahmed</h1>
                </div>
            </main>
        </>
    )
}

export default Home;