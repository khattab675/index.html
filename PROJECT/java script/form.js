<script>
    document.querySelector('form').addEventListener('submit', function (e) {
        // Prevent form submission
        e.preventDefault();

        // Simple validation for required fields
        const fields = [
            { id: 'full-name', message: 'Full Name is required.' },
            { id: 'email', message: 'Email Address is required.' },
            { id: 'phone', message: 'Phone Number is required.' },
            { id: 'dob', message: 'Date of Birth is required.' },
            { id: 'high-school', message: 'High School is required.' },
            { id: 'graduation-year', message: 'Graduation Year is required.' },
            { id: 'program', message: 'Please select a Program of Study.' },
            { id: 'interest', message: 'Statement of Interest is required.' },
        ];

        for (const field of fields) {
            const input = document.getElementById(field.id);
            if (!input.value.trim()) {
                alert(field.message);
                input.focus();
                return;
            }
        }

        // If all fields are valid
        alert('Form submitted successfully!');
        this.submit();
    });
</script>
