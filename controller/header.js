const listDeve = {
  TitleHead: "All Development",
  TitleList: [
    {
      TitleName: "Web Development",
      ListItemChildren: [
        "All Web Development",
        "JavaScript",
        "React",
        "CSS",
        "Angular",
        "PHP",
        "Node.Js",
        "Python",
        "WordPress",
      ],
    },
    {
      TitleName: "Data Sciene",
      ListItemChildren: [
        "All Data Science",
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Data Analysis",
        "Artificial Intelligence",
        "R",
        "TensorFlow",
        "Neural Networks",
      ],
    },
    {
      TitleName: "Develop 1",
      ListItemChildren: [
        "Develop 1",
        "Develop 1",
        "Develop 1",
        "Develop 1",
        "Develop 1",
        "Develop 1",
        "Develop 1",
        "Develop 1",
        "Develop 1",
        "Develop 1",
      ],
    },
    {
      TitleName: "Develop 2",
      ListItemChildren: [
        "Develop 2",
        "Develop 2",
        "Develop 2",
        "Develop 2",
        "Develop 2",
        "Develop 2",
        "Develop 2",
        "Develop 2",
        "Develop 2",
        "Develop 2",
      ],
    },
    {
      TitleName: "Develop 3",
      ListItemChildren: [
        "Develop 3",
        "Develop 3",
        "Develop 3",
        "Develop 3",
        "Develop 3",
        "Develop 3",
        "Develop 3",
        "Develop 3",
        "Develop 3",
        "Develop 3",
      ],
    },
    {
      TitleName: "Develop 4",
      ListItemChildren: [
        "Develop 4",
        "Develop 4",
        "Develop 4",
        "Develop 4",
        "Develop 4",
        "Develop 4",
        "Develop 4",
        "Develop 4",
        "Develop 4",
        "Develop 4",
      ],
    },
    {
      TitleName: "Develop 6",
      ListItemChildren: [
        "Develop 6",
        "Develop 6",
        "Develop 6",
        "Develop 6",
        "Develop 6",
        "Develop 6",
        "Develop 6",
        "Develop 6",
        "Develop 6",
        "Develop 6",
      ],
    },
    {
      TitleName: "Develop 7",
      ListItemChildren: [
        "Lorem17",
        "Lorem27",
        "Lorem37",
        "Lorem47",
        "Lorem57",
        "Lorem67",
        "Lorem77",
        "Lorem87",
        "Lorem97",
        "Lorem107",
      ],
    },
    {
      TitleName: "Develop 8",
      ListItemChildren: [
        "Lorem18",
        "Lorem28",
        "Lorem38",
        "Lorem48",
        "Lorem58",
        "Lorem68",
        "Lorem78",
        "Lorem88",
        "Lorem98",
        "Lorem108",
      ],
    },
    {
      TitleName: "Develop 9",
      ListItemChildren: [
        "Lorem19",
        "Lorem29",
        "Lorem39",
        "Lorem49",
        "Lorem59",
        "Lorem69",
        "Lorem79",
        "Lorem89",
        "Lorem99",
        "Lorem109",
      ],
    },
  ],
};

const listBusi = {
  TitleHead: "All Business",
  TitleList: [
    {
      TitleName: "Finance",
      ListItemChildren: ["", "", "", "", "", "", "", "", ""],
    },
    {
      TitleName: "Entrepreneurship",
      ListItemChildren: ["", "", "", "", "", "", "", "", "", "", "", ""],
    },
    {
      TitleName: "Communications",
      ListItemChildren: ["", "", "", "", "", ""],
    },
    {
      TitleName: "Management",
      ListItemChildren: ["", "", "", "", "", "", "", "", ""],
    },
    {
      TitleName: "Sales",
      ListItemChildren: ["", "", "", "", "", "", "", "", "", "", "", ""],
    },
    {
      TitleName: "Strategy",
      ListItemChildren: ["", "", "", "", "", ""],
    },
    {
      TitleName: "Operations",
      ListItemChildren: ["", "", "", "", "", "", "", "", ""],
    },
    {
      TitleName: "Project Management",
      ListItemChildren: ["", "", "", "", "", "", "", "", "", "", "", ""],
    },
    {
      TitleName: "Business Law",
      ListItemChildren: ["", "", "", "", "", ""],
    },
    {
      TitleName: "Data & Analytics",
      ListItemChildren: ["", "", "", "", "", "", "", "", "", "", "", ""],
    },
    {
      TitleName: "Home Business",
      ListItemChildren: ["", "", "", "", "", "", "", "", ""],
    },
    {
      TitleName: "Human Resources",
      ListItemChildren: ["", "", "", "", "", ""],
    },
    {
      TitleName: "Industry",
      ListItemChildren: ["", "", "", "", "", "", "", "", "", "", "", ""],
    },
    {
      TitleName: "Media",
      ListItemChildren: ["", "", "", "", "", "", "", "", ""],
    },
    {
      TitleName: "Real Estate",
      ListItemChildren: ["", "", "", "", "", ""],
    },
    {
      TitleName: "Other",
      ListItemChildren: ["", "", "", "", "", "", "", "", ""],
    },
  ],
};

const renderMenu = (choose) => {
  let htmlMain1 = `
    <li>
      <a href="#">${listDeve.TitleHead}</a>
    </li>
  `;
  let htmlMain2 = `
    <li>
      <a href="#">${listBusi.TitleHead}</a>
    </li>
  `;
  listDeve.TitleList.forEach((ele) => {
    htmlMain1 += `
      <li>
        <a href="#">${ele.TitleName}</a>
        <i class="fas fa-angle-right"></i>
      </li>
    `;
  });
  listBusi.TitleList.forEach((ele) => {
    htmlMain2 += `
      <li>
        <a href="#">${ele.TitleName}</a>
        <i class="fas fa-angle-right"></i>
      </li>
    `;
  });
  if (choose === "Main1") return htmlMain1;
  else if (choose === "Main2") return htmlMain2;
};

const renderMenuSub = (index, choose) => {
  let htmlSub1 = `
    <li>
      <a href="#">Popular topics</a>
    </li>
  `;
  let htmlSub2 = `
    <li>
      <a href="#">Popular topics</a>
    </li>
  `;
  if (choose) {
    let currentIndex = +index - 1;
    listDeve.TitleList[currentIndex].ListItemChildren.forEach((ele) => {
      htmlSub1 += `
        <li>
          <a href="#">${ele}</a>
        </li>
      `;
    });
    return htmlSub1;
  }
  let currentIndex = +index - 1;
  let title = listBusi.TitleList[currentIndex].TitleName;
  listBusi.TitleList[currentIndex].ListItemChildren.forEach((ele, i) => {
    htmlSub2 += `
        <li>
          <a href="#">${title}${+i + 1}</a>
        </li>
      `;
  });
  return htmlSub2;
};

const toggleMenu = (str, choose = 1) => {
  if (choose) {
    document.querySelector(
      ".header__categories__dropdown-item-2"
    ).style.display = "block";
    document.querySelector(
      ".header__categories__dropdown-item-2 > ul"
    ).innerHTML = str;
    document.querySelector(
      ".header__categories__dropdown-item-3"
    ).style.display = "none";
    return;
  }
  document.querySelector(".header__categories__dropdown-item-3").style.display =
    "block";
  document.querySelector(
    ".header__categories__dropdown-item-3 > ul"
  ).innerHTML = str;
};

const itemMenu2 = (str, style = 1) => {
  toggleMenu(renderMenu(str));
  const listItem3 = document.querySelectorAll(
    ".header__categories__dropdown-item-2 > ul > li"
  );
  if (style) {
    listItem3.forEach((ele2, index) => {
      if (index) {
        ele2.addEventListener("mouseover", () =>
          toggleMenu(renderMenuSub(index, 0), 0)
        );
      }
    });
    return;
  }
  listItem3.forEach((ele2, index) => {
    if (index) {
      ele2.addEventListener("mouseover", () =>
        toggleMenu(renderMenuSub(index, 1), 0)
      );
    }
  });
  return;
};

const menu = () => {
  const listItem2 = document.querySelectorAll(
    ".header__categories__dropdown-item-1 > ul > li"
  );
  listItem2.forEach((ele, index) => {
    if (!(index % 2)) {
      ele.addEventListener("mouseover", () => itemMenu2("Main1", 0));
    } else {
      ele.addEventListener("mouseover", () => itemMenu2("Main2"));
    }
  });
};

const toggleSearch = (style = 1) => {
  if (style) {
    document.querySelector(".header__modal__search").style.pointerEvents =
      "auto";
    document.querySelector(".header__modal__search").style.opacity = "1";
    return;
  }
  document.querySelector(".header__modal__search").style.pointerEvents = "none";
  document.querySelector(".header__modal__search").style.opacity = "0";
};

const navMobile = (style = 1) => {
  if (style) {
    document.querySelector(".modalMenu").style.pointerEvents = "auto";
    document.querySelector(".modalMenu").style.opacity = "1";
    document.getElementById("navIconMobileClose").style.transform = "scale(1)";
    document.querySelector(".modalMenu__contain").style.transform =
      "translateX(0)";
    document.querySelector(".modalMenu__content").style.opacity = "1";
    return;
  }
  document.querySelector(".modalMenu").style.pointerEvents = "none";
  document.querySelector(".modalMenu").style.opacity = "0";
  document.getElementById("navIconMobileClose").style.transform = "scale(0)";
  document.querySelector(".modalMenu__contain").style.transform =
    "translateX(-100%)";
  document.querySelector(".modalMenu__content").style.opacity = "0";
};

const renderHTMLMobileMenu = (style = 1) => {
  if (style) {
    let htmlMain1 = `
      <li><a>${listDeve.TitleHead}</a></li>
  `;
    listDeve.TitleList.forEach((ele) => {
      htmlMain1 += `
      <li><a>${ele.TitleName}</a></li>
    `;
    });
    return htmlMain1;
  }
  let htmlMain2 = `
      <li><a>${listBusi.TitleHead}</a></li>
  `;
  listBusi.TitleList.forEach((ele) => {
    htmlMain2 += `
      <li><a>${ele.TitleName}</a></li>
    `;
  });
  return htmlMain2;
};

const toggleMobileMenu = (str, style = 1) => {
  console.log("asd");
  if (style) {
    let content = document.querySelector(
      ".modalMenu__content-two-content > ul"
    );
    content.innerHTML = str;
    document.querySelector(".modalMenu__content-two").style.transform =
      "translateX(0)";
    return;
  }
  document.querySelector(".modalMenu__content-two").style.transform =
    "translateX(100%)";
};

const addEventsMobileMenu = () => {
  let listBtn = document.querySelectorAll(
    ".modalMenu__content__popular > ul > li"
  );
  listBtn.forEach((ele, index) => {
    if (index !== 0 && !(index % 2)) {
      ele.addEventListener("click", () =>
        toggleMobileMenu(renderHTMLMobileMenu())
      );
    } else if (index !== 0 && index % 2 !== 0) {
      ele.addEventListener("click", () =>
        toggleMobileMenu(renderHTMLMobileMenu(0))
      );
    }
  });
};

const addEvent = () => {
  document
    .getElementById("headerSearch")
    .addEventListener("click", () => toggleSearch());
  document
    .querySelector(".header__modal__overplay")
    .addEventListener("click", () => toggleSearch(0));
  document
    .getElementById("modalSearchClose")
    .addEventListener("click", () => toggleSearch(0));
  document
    .getElementById("navIconMobile")
    .addEventListener("click", () => navMobile());
  document
    .getElementById("navIconMobileClose")
    .addEventListener("click", () => navMobile(0));
  document
    .querySelector(".modalMenu__overplay")
    .addEventListener("click", () => navMobile(0));
  document
    .getElementById("menuTwoBack")
    .addEventListener("click", () => toggleMobileMenu("", 0));
};

renderMenu();
menu();
addEventsMobileMenu();
addEvent();
