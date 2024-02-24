// const friends = ['rakib', 'sakib', 'tomal', 'babu', 'shohag', 'arman']
// // console.log(friends[0].split('').length);
// const newFriends = [];
// for (const friend of friends) {
//     // console.log(typeof friend.split('').length);
//     const newFriendList = friend.split('').length
//     if (newFriendList % 2 === 0) {
//         // console.log(friend);
//         newFriends.push(friend)
//         newFriends.push(friend.length)
//         console.log(newFriends);
//         // return newArray
//         // return newFriends
//     }
//     // console.log(newFriends);
// }


const friend = (friends) => {
    console.log(friends);
    const newFriends = []
    for (const friend of friends) {
        const friendLength = friend.split('').length
        console.log(friendLength);
        if (friendLength % 2 === 0) {
            newFriends.push(friend)
            newFriends.push(friend.length)
            // console.log(newFriends);
           
        }
    }
    return newFriends
}
console.log(friend(['rakib', 'sakib', 'tomal', 'babu', 'shohag', 'arman', 'rayhan', 'ekram', 'abir']));