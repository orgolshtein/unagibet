export default function useCapitalized(input){
    return input.trim().split(" ").map((item)=> item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
};