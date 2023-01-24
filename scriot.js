const ammunition = document.querySelector('.ammunition')
const taptoplay = document.querySelector('.taptoplay')
const gameover = document.querySelector('.gameover')

const zombie  = document.getElementById('first')
const szombie  = document.getElementById('second')
const tzombie  = document.getElementById('third')
const fzombie  = document.getElementById('fourth')
const ffzombie  = document.getElementById('fifth')

const death = document.getElementById('death')
const headshot = document.getElementById('headshot')
const soundshot = document.getElementById('soundshot')

function reload(){
    window.location.reload()
}

const play = () => {

taptoplay.style.visibility = 'hidden'
zombie.classList.add('move')
szombie.classList.add('smove')
tzombie.classList.add('tmove')
fzombie.classList.add('fmove')
ffzombie.classList.add('ffmove')

const shot = () => {
    soundshot.play()

    ammunition.classList.add('shot')

    setTimeout(() => {
        ammunition.classList.remove('shot')}
        ,300)
    
}

const loop = setInterval(() => {
    const zombieposition = zombie.offsetLeft
    const szombieposition = szombie.offsetLeft
    const tzombieposition = tzombie.offsetLeft
    const fzombieposition = fzombie.offsetLeft
    const ffzombieposition = ffzombie.offsetLeft

    const ammunitionpositon = ammunition.offsetLeft

    if(zombieposition <= 250){

        death.play()

        zombie.classList.remove('move')
        zombie.style.left = `${zombieposition}px`
        szombie.classList.remove('move')
        szombie.style.left = `${szombieposition}px`
        tzombie.classList.remove('move')
        tzombie.style.left = `${tzombieposition}px`
        fzombie.classList.remove('move')
        fzombie.style.left = `${fzombieposition}px`
        ffzombie.classList.remove('move')
        ffzombie.style.left = `${ffzombieposition}px`

        gameover.style.visibility = 'visible'
        document.removeEventListener('mousedown', shot)
        document.removeEventListener('mousedown', play)
        document.addEventListener('mousedown', reload)
        clearInterval(loop)
        
    }

    else if(szombieposition <= 250){

        death.play()

        zombie.classList.remove('move')
        zombie.style.left = `${zombieposition}px`
        szombie.classList.remove('move')
        szombie.style.left = `${szombieposition}px`
        tzombie.classList.remove('move')
        tzombie.style.left = `${tzombieposition}px`
        fzombie.classList.remove('move')
        fzombie.style.left = `${fzombieposition}px`
        ffzombie.classList.remove('move')
        ffzombie.style.left = `${ffzombieposition}px`

        gameover.style.visibility = 'visible'
        document.removeEventListener('mousedown', shot)
        document.removeEventListener('mousedown', play)
        document.addEventListener('mousedown', reload)
        clearInterval(loop)
        
    }

    else if(tzombieposition <= 250){

        death.play()

        zombie.classList.remove('move')
        zombie.style.left = `${zombieposition}px`
        szombie.classList.remove('move')
        szombie.style.left = `${szombieposition}px`
        tzombie.classList.remove('move')
        tzombie.style.left = `${tzombieposition}px`
        fzombie.classList.remove('move')
        fzombie.style.left = `${fzombieposition}px`
        ffzombie.classList.remove('move')
        ffzombie.style.left = `${ffzombieposition}px`

        gameover.style.visibility = 'visible'
        document.removeEventListener('mousedown', shot)
        document.removeEventListener('mousedown', play)
        document.addEventListener('mousedown', reload)
        clearInterval(loop)
        
    }

    else if(fzombieposition <= 250){

        death.play()

        zombie.classList.remove('move')
        zombie.style.left = `${zombieposition}px`
        szombie.classList.remove('move')
        szombie.style.left = `${szombieposition}px`
        tzombie.classList.remove('move')
        tzombie.style.left = `${tzombieposition}px`
        fzombie.classList.remove('move')
        fzombie.style.left = `${fzombieposition}px`
        ffzombie.classList.remove('move')
        ffzombie.style.left = `${ffzombieposition}px`

        gameover.style.visibility = 'visible'
        document.removeEventListener('mousedown', shot)
        document.removeEventListener('mousedown', play)
        document.addEventListener('mousedown', reload)
        clearInterval(loop)
        
    }

    else if(ffzombieposition <= 250){

        death.play()

        zombie.classList.remove('move')
        zombie.style.left = `${zombieposition}px`
        szombie.classList.remove('move')
        szombie.style.left = `${szombieposition}px`
        tzombie.classList.remove('move')
        tzombie.style.left = `${tzombieposition}px`
        fzombie.classList.remove('move')
        fzombie.style.left = `${fzombieposition}px`
        ffzombie.classList.remove('move')
        ffzombie.style.left = `${ffzombieposition}px`

        gameover.style.visibility = 'visible'
        document.removeEventListener('mousedown', shot)
        document.removeEventListener('mousedown', play)
        document.addEventListener('mousedown', reload)
        clearInterval(loop)
        
    }

    else if(ammunitionpositon > zombieposition){
        zombie.classList.remove('move')
        ammunition.classList.remove('shot')
        
        headshot.play()
    }

    else if(ammunitionpositon > szombieposition){
        szombie.classList.remove('smove') 
        ammunition.classList.remove('shot')   

        headshot.play()
    }

    else if(ammunitionpositon > tzombieposition){
        tzombie.classList.remove('tmove') 
        ammunition.classList.remove('shot')   

        headshot.play()
    }

    else if(ammunitionpositon > fzombieposition){
        fzombie.classList.remove('fmove')
        ammunition.classList.remove('shot')
        
        headshot.play()
    }

    else if(ammunitionpositon > ffzombieposition){
        ffzombie.classList.remove('ffmove')
        ammunition.classList.remove('shot')
        
        headshot.play()
    }

    else{
        zombie.classList.add('move')
        szombie.classList.add('smove')
        tzombie.classList.add('tmove')
    }
    
    
})

document.addEventListener('mousedown', shot)

}
document.addEventListener('mousedown', play)