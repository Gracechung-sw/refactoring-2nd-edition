/**
 * 문장을 호출한 곳으로 옮기기(Move Statements to Callers)
 * Refactoring point
 * renderPerson 과 listRecentPhotos에서 emitPhotoData에 있는 <p>location~ 을 출력하는 방식이 다르다면?
 * 이때는 더이상 공통적으로 사용할 수없기 때문에 emitPhotoData에서 outStream.write(`<p>location: ${photo.location}</p>\n`);을 빼서
 * 각각 사용하는 곳(호출하는 곳)으로 빼서, 여기서 처리해 주도록 함.
 * or decorator나 callback으로 어떤 locatio 형식을 받아오고 싶은지 정해주는 방식도 있음.
 */
function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
  outStream.write(`<p>location1: ${photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write('<div>\n');
      emitPhotoData(outStream, p);
      outStream.write(`<p>location2: ${photo.location}</p>\n`);
      outStream.write('</div>\n');
    });
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
}

function renderPhoto(outStream, aPhoto) {
  outStream.write('');
}

function recentDateCutoff() {
  //7 days ago.
  return new Date().setDate(new Date().getDate() - 7);
}
