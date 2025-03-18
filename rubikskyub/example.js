

function openDialog(dialogId) {
    document.getElementById(dialogId).style.display = "block";
}


function closeDialog(dialogId) {
    document.getElementById(dialogId).style.display = "none";
}


function toggleForm(formId) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    
    document.getElementById(formId).style.display = "block";
}


window.onclick = function(event) {
    let dialog = document.getElementById("loginRegisterDialog");
    if (event.target === dialog) {
        dialog.style.display = "none";
    }
};

const solveData = {
    solve1: { 
        title: "Solve 1", 
        scramble: "D2 R' L2 D R F R U2 R2 U2 F2 U2 B' R2 F D2 R2 B D L2'", 
        solution: `x2 y
        F' L F U' r U2' r' U2 B
        U R' U R2 U' R' U' R U' R' U R U' R'
        r F' r U' r' F r U' r' F2 r
        U' R2' F2 R U2 R U2' R' F R U R' U' R' F R2`, 
        time: "12.24s", 
        image: "images/solve1.png" 
    },
    solve2: { 
        title: "Solve 2", 
        scramble: "R B R' U F2 R2 U' F2 D2 F2 U' B2 U' R' D' U' B U' F D'", 
        solution: `z2 
        R' F R2 D L'
        y' U L U L'
        L' U2 L U2 L' U L
        y U' L' U L
        U2 R U' R' U R U' R' 
        U r U2 R' U' R U' r'
        U R' F R f' R' F R2 U R' U' R' F' R2 U R' S U`, 
        time: "13.67s", 
        image: "images/solve2.png" 
    },
    solve3: { 
        title: "Solve 3", 
        scramble: "U' B' D' B2 D F2 R2 F2 L2 D' R2 F R' B2 F D2 L' F", 
        solution: `z2 y'
        U R' F2 D' R D
        y' U' R' U R
        L U2 L' U  y' L' U' L
        R U R' y U L' U' L
        U' R U R'
        U2 f' r U r' U' r' F r S`, 
        time: "11.61s", 
        image: "images/solve3.png" 
    },
    solve4: { 
        title: "Solve 4", 
        scramble: "F D2 U2 B R2 B2 U2 L2 D2 F D2 B2 L' D B' U' L' F D F' R'", 
        solution: `x2
        [R L'] D' R D2
        U' R' U R
        D' L' U' L D
        U' L U2 L' Dw R U' R'
        L' U L
        U' Rw U R' U' M U R U' R'
        Lw U' R' D R U R' D' R U R' D R U' R' D'`, 
        time: "13.40s", 
        image: "images/solve4.png" 
    },
    solve5: { 
        title: "Solve 5", 
        scramble: "D2 B U2 B' U2 F2 D2 L2 F' D2 F U2 L' F L2 B L' R' B U' R2", 
        solution: `z2 y
        D L R' B' D2
        U2 R U' R' L U' L'
        U R U' R2 U R
        U2 R U' R' U R U' R'
        U F R U R' U' R U R' U' F'
        U R' U' R U D' R2 U R' U R U' R U' R2 D`, 
        time: "15.08s", 
        image: "images/solve5.png" 
    },
    solve6: { 
        title: "Solve 6", 
        scramble: "U R' L' D' F U2 F2 L2 U L' F L2 U2 F2 D R2 D2 F2 U' L2 F2 R2 F2 U' L2", 
        solution: `y' z2
        L' F2 L F R2 D' R' D' 
        U' R U' R' U y' R' U R
        y U' L U L'
        f R' f'
        y' U2 R U R' U' R U R'
        R U2 R2' U' R2 U' R2' U2' R U`,
        time: "12.37s", 
        image: "images/solve6.png" 
    }
};
function openSolveDialog(solveId) {
    const dialog = document.getElementById("solveDialog");

   
    document.getElementById("solveTitle").textContent = solveData[solveId].title;
    document.getElementById("scrambleText").textContent = solveData[solveId].scramble;
    document.getElementById("solutionText").textContent = solveData[solveId].solution;
    document.getElementById("solveTime").textContent = solveData[solveId].time;
    document.getElementById("scrambleImage").src = solveData[solveId].image;

   
    dialog.style.display = "flex";
}

function closeSolveDialog() {
    document.getElementById("solveDialog").style.display = "none";
}


window.onclick = function(event) {
    const dialog = document.getElementById("solveDialog");
    if (event.target === dialog) {
        closeSolveDialog();
    }
};
let lastScrollTop = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      
      header.classList.add("hidden");
    } else {
      
      header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
  });
