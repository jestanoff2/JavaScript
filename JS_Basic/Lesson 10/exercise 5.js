function checkSalary(allTabs, salary, OpenTabs) {
    for (let i = 0; i < allTabs; i++) {
        switch (OpenTabs[i]) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
            default:
                break;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
        } else {
            console.log(Math.round(salary));
        }
    }
}
checkSalary(10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook")