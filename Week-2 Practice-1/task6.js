const friends = ["Rahim", "Karim", "Abdul", "Saids", "HeroAlom"]

let answer = friends[0]

for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > answer.length)
        answer = friends[i]
}
console.log(answer);