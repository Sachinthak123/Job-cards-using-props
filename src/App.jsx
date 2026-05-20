import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG5.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Remote"
  },
  {
    brandLogo: "data:image/jpeg;base64,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",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR3neyop9Cpm0RBJU4pRFAXIpYAk6qqf2OA&s",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6tvMO_MkZShhwLzDUbD4yWdVMsS30qR8iw&s",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "UI Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5Ju3kgQqjnKgOUJbgKnMOOlRA1uVeV3AFg&s",
    companyName: "IBM",
    datePosted: "3 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
    companyName: "Salesforce",
    datePosted: "2 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$68/hr",
    location: "Gurgaon, India"
  }
];

  return (
    <>
    <div className="uppercase font-bold flex items-center justify-center text-4xl text-white bg-black m-2 border-b-2">
        <h1>Job Card Project using props drilling !!</h1>
      </div>
       <div className='w-full flex flex-wrap items-center justify-center bg-black'>
    {jobs.map((item,index) => (
      <Card key={index} company={item.companyName} logo={item.brandLogo} datePosted ={item.datePosted} post={item.post} tag1={item.tag1} tag2={item.tag2} pay={item.pay} location={item.location} />
    ))}
  </div>
    </>
  )
}

export default App
