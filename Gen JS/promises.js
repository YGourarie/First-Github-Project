const emailRef = document.querySelector(".email");

// fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     response.json().then(data => {
//         emailRef.innerHTML = data[1].email
//     })
// })

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     emailRef.innerHTML = data[3].email;
//   });

// async function main() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//     emailRef.innerHTML = data[2].email
// }

// main()

// create and unlock promise

const statusRef = document.querySelector(".status");

const videoRef = document.querySelector(".video");

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("no video");
    }
  });
}

async function mainTwo(getVideoParam) {
  const status = getVideoParam;
  statusRef.innerHTML = status;
  try {
    videoRef.innerHTML = await getVideo(getVideoParam);
  } catch (e) {
    videoRef.innerHTML = e
  }
}

mainTwo("FREEE");
