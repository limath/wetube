export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  console.log(searchingBy)
  res.render("search", { pageTitle: "Search", searchingBy });
};
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });


  //res.render("home")에서 render함수는 views폴더에서 home.pug를 찾아서 보여줌
  //render의 두번쨰 변수로 템플릿마다 변수를 다르게 설정 