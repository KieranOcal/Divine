let process = {
  menu:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">9 Superheroes With Invincible Leadership Styles</div>
              </div>
            </div>

    <div className="list-group">
      <ul>
      <li className="list-group-title"></li>
        <li><a href='#' onClick={process.Challenge}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">ChallengeYourself</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      <li className="list-group-title"></li>
        <li><a href='#' onClick={process.Work}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">DoWorkYouCareAbout</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      <li className="list-group-title"></li>
        <li><a href='#' onClick={process.Rish}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">TakeARisk</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li className="list-group-title"></li>
        <li><a href='#' onClick={process.Believe}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">IronMan</div>
                  <div className="item-after">BelieveInYourself</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Vision}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">HaveAVision</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Good}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">FindGoodPeople</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Fear}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">FaceYourFear</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>

</div>
</div>
</div>
</div>
</div>;
    ReactDOM.render(content,document.getElementById('root'));
  },
  Alicorn:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">World of Myth</div>
              </div>
            </div>
            <center><img src={"img/imp.jpg"}/>
            <p>asdajslfkjsldkjadlk jalkjlksjdlkaj lkj lakjskldj </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
            ReactDOM.render(content,document.getElementById('root'));
  },
  Challenge:function(){
         let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Challenge Yourself</div>
              </div>
            </div>
            <center><img src={"img/challenge.jpg"} width={"100%"}/>
            <p>Richard Branson says his biggest motivation is to keep challenging himself. He treats life like one long university education, where he can learn more every day. You can too.
 </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
         ReactDOM.render(content,document.getElementById('root'));
  },
  Work:function(){
         let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Do Work You Care About</div>
              </div>
            </div>
            <center><img src={"docare/.jpg"} width={"100%"}/>
            <p> There's no doubt that running a business take a lot of time. Steve Jobs noted that the only way to be satisfied in your life is to do work that you truly believe in.
 </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
          ReactDOM.render(content,document.getElementById('root'));
  },
  Risk:function(){
         let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Take The Risk</div>
              </div>
            </div>
            <center><img src={"img/risk.jpg"} width={"100%"}/>
            <p>We never know the outcome of our efforts unless we actually do it. Jeff Bezos said it helped to know that he wouldn’t regret failure, but he would regret not trying.
 </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Believe:function(){
         let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Believe In Yourself</div>
              </div>
            </div>
            <center><img src={"believe/ironman.jpg"} width={"100%"}/>
            <p>As Henry Ford famously said, “Whether you think you can, or think you can’t, you’re right.” Believe that you can succeed, and you’ll find ways through different obstacles. If you don’t, you’ll just find excuses.
 </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Vision:function(){
         let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Have A Vision</div>
              </div>
            </div>
            <center><img src={"vision/black.jpg"} width={"100%"}/>
            <p>The founder and CEO of Tumblr, David Karp, notes that an entrepreneur is someone who has a vision for something and a desire to create it. Keep your vision clear at all times.
 </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Good:function(){
  let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Find Good People</div>
              </div>
            </div>
            <center><img src={"good/cap.jpg"} width={"100%"}/>
            <p>Who you’re with is who you become. Reid Hoffman, co-founder of LinkedIn, noted that the fastest way to change yourself is to hang out with people who are already the way you want to be.
            </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
    Fear:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Face Your Fears</div>
              </div>
            </div>
            <center><img src={"fear/wonder.png"} width={"100%"}/>
            <p>Overcoming fear isn’t easy, but it must be done. Arianna Huffington once said that she found fearlessness was like a muscle -- the more she exercised it, the stronger it became.
            </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  loading:function(){
    let content = <div>
          Loading...
        </div>;
    ReactDOM.render(content,document.getElementById('root'));
  }
}

process.loading();
setTimeout(function(){
  process.menu();
},3000);
