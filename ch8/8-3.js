/**
 * 문장을 함수로 옮기기(Move Statements into Function)
 * Refactor point
 * renderPerson에서
 *  result.push(`<p>title: ${person.photo.title}</p>`);
 *  result.push(emitPhotoData(person.photo));
 * 이 부분과
 * photoDiv의 
 *  [
    '<div>',
    `<p>title: ${photo.title}</p>`,
    emitPhotoData(photo),
    '</div>',
  ]
  이 부분이 코드 중복. 
  `<p>title: ${person.photo.title}</p> 이 부분을 emitPhotoData로 옮겨서 해결!
 */
export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

export function photoDiv(photo) {
  return ['<div>', emitPhotoData(photo), '</div>'].join('\n');
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>title: ${photo.title}</p>`);
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join('\n');
}

function renderPhoto(aPhoto) {
  return '';
}
