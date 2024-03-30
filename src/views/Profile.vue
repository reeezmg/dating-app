<script setup>
  import Profileinfo from '../components/Profileinfo.vue'; 
  import Profiledetails from '../components/Profiledetails.vue'; 
  import Interests from '../components/Interests.vue'; 
  import Bio from '../components/Bio.vue'; 
  import About from '../components/About.vue'; 
  import Bottombar from '../components/Bottombar.vue'; 
  import Shortcutbtn from '../components/Shortcutbtn.vue'; 
  import Topbar from '../components/Topbar.vue'; 

  const imageUrls = [
    'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1596724105459-8a04323a507f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1578923813875-bf8b98f36b0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1591608428787-e7945b6aa9c7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  
  ];
  const interest =[
    'Reading',
    'Art',
    'Gaming',
    'Movies',
  
  ]

  const data = {
    name:"mollie2901",
    desc:"idk lol",
    age:"22",
    location:"Derbyshire",
    height: "5&#x27;4&quot; (163cm)",
    job:"Hospitality",
    university: "Some College",
    gender:"Women",
    statusDesc:"Single, wants to date but nothing serious, Intrested in men, For Friends",
    interest:[
    'Reading',
    'Art',
    'Gaming',
    'Movies',
    ],
    bodyInfo:{
      eyeColor:"Blue",
      hairType:"Mixed colour",
      bodyType:"Big & tALL BBW"
    },
    otherInfo:[
      "Non-relegious",
      "Caucasian"
    ],
    aboutMe:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique architecto distinctio voluptates aliquid. Facilis perspiciatis dicta, eligendi totam repellat voluptatum nostrum rerum dolore doloremque asperiores sequi sit at. Quam, repudiandae!"

  }
  </script>

<template>
    <div class="bg-backgroundColor pt-14 ">
      <div class="fixed top-0 w-full ">
        <Topbar/>
        </div>
      <Profileinfo :images="imageUrls" :name="data.name" :desc="data.desc" :age="data.age" :location="data.location" :height="data.height"/>
      <Profiledetails :job="data.job" :university="data.university" :gender="data.gender" :statusDesc="data.statusDesc"/>
      <Interests :interest="data.interest"/>
      <Bio :bodyInfo="data.bodyInfo" :otherInfo="data.otherInfo"/>
      <About :aboutMe="data.aboutMe"/>
      <div class="fixed bottom-0 w-full ">
        <Shortcutbtn/>
        <Bottombar/>
        </div>
    </div>
  </template>
  
  

  