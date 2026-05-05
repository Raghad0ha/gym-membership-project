document.addEventListener("DOMContentLoaded", function () {
    const joinForm = document.querySelector(".join-form");
    const contactForm = document.querySelector(".contact-form");

    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function validatePhone(phone) {
        return phone.length >= 10;
    }

    if (joinForm) {
        joinForm.addEventListener("submit", function (e) {
            const fullName = joinForm.fullName.value.trim();
            const age = parseInt(joinForm.age.value);
            const weight = parseInt(joinForm.weight.value);
            const phone = joinForm.phone.value.trim();
            const email = joinForm.email.value.trim();
            const membership = joinForm.membership.value;
            const goal = joinForm.goal.value;

            if (fullName === "" || age === "" || weight === "" || phone === "" || email === "" || membership === "" || goal === "") {
                e.preventDefault();
                alert("Please fill all fields.");
                return;
            }

            if (age < 10) {
                e.preventDefault();
                alert("Age must be above 10.");
                return;
            }

            if (weight < 20) {
                e.preventDefault();
                alert("Weight must be above 20 kg.");
                return;
            }

            if (!validatePhone(phone)) {
                e.preventDefault();
                alert("Phone number must be at least 10 digits.");
                return;
            }

            if (!validateEmail(email)) {
                e.preventDefault();
                alert("Invalid email format.");
                return;
            }

            alert("Form submitted successfully!");
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            const first = contactForm.firstName.value.trim();
            const last = contactForm.lastName.value.trim();
            const gender = contactForm.gender.value;
            const mobile = contactForm.mobile.value.trim();
            const dob = contactForm.dob.value;
            const email = contactForm.email.value.trim();
            const language = contactForm.language.value;
            const message = contactForm.message.value.trim();

            if (first === "" || last === "" || gender === "" || mobile === "" || dob === "" || email === "" || language === "" || message === "") {
                e.preventDefault();
                alert("Please fill all fields.");
                return;
            }

            if (!validatePhone(mobile)) {
                e.preventDefault();
                alert("Mobile number must be at least 10 digits.");
                return;
            }

            if (!validateEmail(email)) {
                e.preventDefault();
                alert("Invalid email format.");
                return;
            }

            alert("Message sent successfully!");
        });
    }
});
