var linkedin_ids = [{
  href: 'https://www.linkedin.com/in/amit-kumar-19511621a/',
  name: 'Amit kumar',
  location: 'Bareilly',
  contact: 'amit.engg9897@gmail.com'
}, 
{
  href: 'https://www.linkedin.com/in/vivek-kumar-27a875233/',
  name: 'Vivek kumar',
  location: 'Bareilly',
  contact: 'code.vivekkumar@gmail.com'
}, 
{
  href: 'https://www.linkedin.com/in/avneesh-kumar-429740221/',
  name: 'Avneesh kumar',
  location: 'Bareilly',
  contact: 'kavneesh9045@gmail.com'
}, 
{
  href: 'https://www.linkedin.com/in/mridulsharmaindia/',
  name: 'Mirdul sharma',
  location: 'Bareilly',
  contact: 'mmridulsharma@gmail.com'
}, 

]

for (let i = 0; i < linkedin_ids.length; i++) {
  chrome.tabs.create({ url: linkedin_ids[i].href }).then(() => {
    chrome.tabs.executeScript({
      code: 'console.log("Name :"+linkedin_ids[i].name ) console.log("Location :"+linkedin_ids[i].location ); console.log("Contact Info :"+linkedin_ids[i].contact);'
    }, function () {
      if (chrome.runtime.lastError) {
        console.log("ERROR: " + chrome.runtime.lastError.message);
      }
    }

    )
  })
}