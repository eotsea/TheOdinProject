const cardItems = document.querySelector(".main");
const addButton = document.getElementById("addButton");
const searchButton = document.getElementById("searchButton");
const addDialog = document.querySelector(".addDialog");
const form = document.querySelector("form");

const closeDialog = document.querySelector(".closeDialog");
const addBook = document.querySelector(".addBook");

let bookList = [
  {
    id: crypto.randomUUID(),
    title: "1984",
    author: "George Orwell",
    page: 345,
  },
  {
    id: crypto.randomUUID(),
    title: "Hobbit",
    author: "J.R.R. Tolkine",
    page: 450,
  },
  {
    id: crypto.randomUUID(),
    title: "Zero to Hero Js",
    author: "Muhammet Uğur",
    page: 10000,
  },
];

function book (id ,title , author, page ){
  this.id = id;
  this.title = title;
  this.author = author;
  this.page = page ;
};

const randomRGB = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  return `rgb(${x} , ${y}, ${z})`;
};
const deleteBook = (book) => {
  const index = bookList.indexOf(book);
  console.log(index);
  cardItems.children[index].remove();
  bookList.splice(index,1);
};

const renderCards = (filter = "") => {
  cardItems.innerHTML = "";

  const filteredBooks = !filter
    ? bookList
    : bookList.filter((filter) => bookList.title.include(filter));

  filteredBooks.forEach((book) => {
    const bookEl = document.createElement("div");
    bookEl.innerHTML = `
       <p class="bookTitle">${book.title.toString()}</p>
        <p class="author">${book.author}</p>
        <p>Page ${book.page}</p>
        <div class="cardButtons">
          <button class="readButton" id="readButton">Read</button>
          <button  >
            <svg
              id="deleteButton"
              class="deleteButton"
              fill="#000000"
              height="800px"
              width="800px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M458.667,42.669h-128V32.004c0-17.647-14.354-32.004-32-32.004h-85.333c-17.646,0-32,14.357-32,32.004v10.665h-128
				c-5.889,0-10.667,4.776-10.667,10.667v42.67c0,5.89,4.778,10.667,10.667,10.667h11.729l40.421,383.995H74.667
				c-5.891,0-10.667,4.777-10.667,10.667S68.775,512,74.667,512h42.667h277.331c0.179,0,0.356-0.017,0.533-0.025
				c0.164,0.007,0.33,0.025,0.496,0.025h42.665c5.891,0,10.667-4.776,10.667-10.667s-4.775-10.667-10.667-10.667h-31.844
				l40.423-383.995h11.729c5.89,0,10.667-4.776,10.667-10.667v-42.67C469.333,47.444,464.557,42.669,458.667,42.669z
				 M202.667,32.004c0-5.885,4.785-10.671,10.667-10.671h85.333c5.882,0,10.667,4.786,10.667,10.671v10.665H202.667V32.004z
				 M385.062,490.667H126.935L86.514,106.672h338.971L385.062,490.667z M448,85.339h-10.667H74.667H64V64.002h384V85.339z"
                    />
                    <path
                      d="M256,469.33c5.889,0,10.667-4.776,10.667-10.667V177.332c0-5.89-4.778-10.667-10.667-10.667
				c-5.891,0-10.667,4.777-10.667,10.667v281.331C245.333,464.555,250.109,469.33,256,469.33z"
                    />
                    <path
                      d="M256,155.812c5.889,0,10.667-4.776,10.667-10.667v-6.475c0-5.891-4.778-10.667-10.667-10.667
				c-5.891,0-10.667,4.777-10.667,10.667v6.475C245.333,151.037,250.109,155.812,256,155.812z"
                    />
                    <path
                      d="M303.121,469.324c0.127,0.004,0.254,0.006,0.379,0.006c5.718,0,10.452-4.534,10.654-10.294l0.265-7.582
				c0.204-5.888-4.402-10.827-10.29-11.033c-5.9-0.191-10.827,4.401-11.031,10.289l-0.265,7.582
				C292.627,464.179,297.233,469.119,303.121,469.324z"
                    />
                    <path
                      d="M304.592,427.141c0.127,0.004,0.254,0.006,0.379,0.006c5.718,0,10.452-4.533,10.654-10.294l9.7-277.81
				c0.206-5.887-4.4-10.826-10.288-11.033c-5.906-0.175-10.827,4.401-11.034,10.289l-9.7,277.81
				C294.098,421.997,298.704,426.935,304.592,427.141z"
                    />
                    <path
                      d="M350.358,469.305c0.252,0.018,0.505,0.026,0.754,0.026c5.552,0,10.238-4.299,10.629-9.923l22.377-319.993
				c0.411-5.876-4.021-10.974-9.898-11.385c-5.852-0.425-10.973,4.018-11.383,9.896L340.461,457.92
				C340.05,463.796,344.481,468.894,350.358,469.305z"
                    />
                    <path
                      d="M208.5,469.33c0.125,0,0.252-0.002,0.379-0.006c5.888-0.206,10.494-5.145,10.288-11.032l-11.173-319.993
				c-0.206-5.888-5.146-10.468-11.034-10.289c-5.888,0.206-10.494,5.145-10.288,11.033l11.173,319.993
				C198.048,464.797,202.781,469.33,208.5,469.33z"
                    />
                    <path
                      d="M159.652,440.865c-5.877,0.412-10.306,5.509-9.895,11.386l0.502,7.157c0.394,5.623,5.077,9.922,10.629,9.922
				c0.25,0,0.502-0.008,0.756-0.026c5.877-0.412,10.306-5.509,9.896-11.386l-0.502-7.157
				C170.627,444.883,165.527,440.441,159.652,440.865z"
                    />
                    <path
                      d="M147.482,419.69c0.394,5.623,5.077,9.923,10.629,9.923c0.25,0,0.502-0.009,0.754-0.026
				c5.877-0.412,10.308-5.508,9.898-11.385l-19.602-280.275c-0.411-5.878-5.534-10.305-11.383-9.896
				c-5.877,0.412-10.308,5.508-9.898,11.385L147.482,419.69z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>`;
    bookEl.classList.add("card");
    bookEl.style["background-color"] = randomRGB();
    bookEl.style["border-left"] = `8px solid ${randomRGB()}`;
    bookEl.addEventListener("click", (e) => {
 
      if (e.target.id === "readButton") {
        e.target.textContent =
          e.target.textContent === "Read" ? "Unread" : "Read";
      }
      if (e.target.id === "deleteButton") {
        console.log("delete");
        deleteBook(book);
      }
    });
    cardItems.append(bookEl);
  });
};

const addBooks = () => {
  let newBook = new book();
  const { title, author, page } = form.elements;
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    page.value === 0
  )
    return;
  newBook = {
    id: crypto.randomUUID(),
    title: title.value,
    author: author.value,
    page: page.value,
  };
  console.log(title.value + author.value + page.value);
  bookList.push(newBook);
  console.log(bookList);
  form.reset();
  renderCards();
  addDialog.close();
};
renderCards();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBooks();
});
addButton.addEventListener("click", () => {
  addDialog.showModal();
});

closeDialog.addEventListener("click", () => {
  addDialog.close();
});
