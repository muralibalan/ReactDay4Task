import React from "react"
import Navigation from "./components/Navigation"
import Header from "./components/Header"
import Icons from "./components/Icons"
import ImgShow from "./components/ImgShow"
import People from "./components/People";
import Action from "./components/Action"
import Footer from "./components/Footer"
import Img1 from './assets/img/testimonials-1.jpg'
import Img2 from './assets/img/testimonials-2.jpg'
import Img3 from './assets/img/testimonials-3.jpg'
import sImg1 from './assets/img/bg-showcase-1.jpg'
import sImg2 from './assets/img/bg-showcase-2.jpg'
import sImg3 from './assets/img/bg-showcase-3.jpg'


function App() {
  {/* Icons Grid Datas*/}
  const icon = [
    {
      iconName:"bi-window m-auto text-primary",
      name:"Fully Responsive",
      disc:"This theme will look great on any device, no matter the size!"
    },
    {
      iconName:"bi-layers m-auto text-primary",
      name:"Bootstrap 5 Ready",
      disc:"Featuring the latest build of the new Bootstrap 5 framework!"
    },
    {
      iconName:"bi-terminal m-auto text-primary",
      name:"Easy to Use",
      disc:"Ready to use with your own content, or customize the source files!"
    }
  ];

  // Image Showcases Datas

  const imgDatas = [
    
    {
      bg_img : sImg1,
      head : "Fully Responsive Design",
      img_disc : "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
    },
    {
      bg_img : sImg2,
      head : "Updated For Bootstrap 5",
      img_disc : "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
    },
    {
      bg_img : sImg3,
      head : "Easy to Use & Customize",
      img_disc : "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
    }
  ]
  
  // People Datas

  const peoples = [
    {
      pName : "Margaret E.",
      pImge : Img1,
      pDisc : "This is fantastic! Thanks so much guys!"
    },
    {
      pName : "Fred S",
      pImge : Img2,
      pDisc : "Bootstrap is amazing. I've been using it to create lots of super nice landing pages"
    },
    {
      pName : "Sarah W.",
      pImge : Img3,
      pDisc : "Thanks so much for making these free resources available to us!"
    }

  ]
  return (
    <>
      <Navigation/>
      <Header/>

      {/* <!-- Icons Grid--> */}
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                  {/* i used JavaScript map function */}
                    {
                      icon.map((e,i)=>{
                        return <Icons value ={e} key = {i}/>
                      })
                    }
                </div>
            </div>
        </section>

     {/* <!-- Image Showcases--> */}
     <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    {/* i used JavaScript map function */}
                      {
                        imgDatas.map((e,i)=>{
                          return<ImgShow index={i} value2 = {e} key={i} />
                        })
                      } 
                </div>
            </div>
        </section>          
      
      {/* <!-- Testimonials--> */}

      <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                       {/* i used JavaScript map function */}
                        {
                           peoples.map((e,i)=>{
                            return<People value3 = {e} key={i}/>
                          })
                        }
                </div>
              </div>
      </section>

      {/* <!-- Call to Action--> */}

                <Action/>

      {/* <!-- Footer--> */}

                <Footer/>
    </>
  )
}

export default App
