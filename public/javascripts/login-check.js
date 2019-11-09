function loginCheck(userEmail, userPassword, membership){
    const member = membership.filter(person => person.email === userEmail && person.password === userPassword);

    //check
    if(member.length !== 0){
        return member;
    }else{
        console.log('Not a member');
        return false;
    }
}

module.exports = loginCheck;