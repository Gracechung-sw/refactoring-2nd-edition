import fs from 'fs';

function run(args) {
  const command = validateCommand(args);
  countOrders(command);
}

function validateCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const countReadOnly = args.includes('-r');
  return {
    fileName,
    countReadOnly,
  };
}

function countOrders(command) {
  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData);
  if (command.countReadOnly) {
    console.log(orders.filter((order) => order.status === 'ready').length);
  } else {
    console.log(orders.length);
  }
}

run(process.argv); // run 함수를 만들어서 노드의 process dependency를 제거.
