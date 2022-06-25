function isYelling(message: string) {
  return message.toUpperCase() === message;
}
function isAskingQuestion(message:string) {
  return message[message.length - 1] === "?";
}

function hasLetters(message:string) {
  return /[a-zA-Z]/.test(message);
}
export function hey(message: string): string {
  const trimmedMsg = message.replace(/\s/g, "");
  if(trimmedMsg === "")
    return "Fine. Be that way!"
  else if (hasLetters(trimmedMsg) && isYelling(trimmedMsg) && !isAskingQuestion(trimmedMsg))
    return 'Whoa, chill out!';
  else if (hasLetters(trimmedMsg) && isYelling(trimmedMsg) && isAskingQuestion(trimmedMsg))
    return "Calm down, I know what I'm doing!";
  else if (isAskingQuestion(trimmedMsg))
    return "Sure."
  return 'Whatever.';
}
