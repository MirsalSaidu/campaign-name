document.addEventListener('DOMContentLoaded', function() {
    // Data for facilities
    const facilities = {
        BUR: [
            {code: "BH Abu Dhabi", name: "Burjeel Hospital Abu Dhabi"},
            {code: "BDSC Reem", name: "Burjeel Day Surgery Center Al Reem Island"},
            {code: "BH Dubai", name: "Burjeel Hospital Dubai"},
            {code: "BH Sharjah", name: "Burjeel Specialty Hospital Sharjah"},
            {code: "BRH Al Ain", name: "Burjeel Royal Hospital Al Ain"},
            {code: "BRH Asharej", name: "Burjeel Royal Asharej Al Ain"},
            {code: "BMC Shamkha", name: "Burjeel Medical Center, Al Shamkha, Makani Mall"},
            {code: "BDSC Shahama", name: "Burjeel Day Surgery Center, Al Shahama Deerfields Mall"},
            {code: "BMC Marina", name: "Burjeel Medical Centre Al Marina"},
            {code: "BMC Barari", name: "Burjeel Medical Center, Barari, Al Ain"},
            {code: "BMC Al Zeina", name: "Burjeel Medical Centre, Al Zeina, Al Raha Beach"},
            {code: "BDSC Barari", name: "Barari for One Day Surgery Center Al Ain"},
            {code: "BDSC Dhafra", name: "Burjeel Day Surgery Centre Al Dhafra"}
        ],
        LLH: [
            {code: "LLH Abu Dhabi", name: "LLH Hospital Abu Dhabi"},
            {code: "LLH Musaffah", name: "LLH Hospital Musaffah"},
            {code: "LLHM Musaffah", name: "LLH Medical Center Musaffah"},
            {code: "LLH Oasis", name: "LLH Oasis Medical centre Madinat Zayed"},
            {code: "LLHM Al Ain", name: "LLH Medical Centre Al Ain"},
            {code: "LLHM Al Najda", name: "LLH Medical Centre Al Najda, Abu Dhabi"}
        ],
        LFC: [
            {code: "Lifecare", name: "LifeCare Hospital"}
        ],
        MED: [
            {code: "MED Abu Dhabi", name: "Medeor Hospital Abu Dhabi"},
            {code: "MED Dubai", name: "Medeor Hospital Dubai"},
            {code: "MedM Abu Dhabi", name: "Medeor Medical Center Abu Dhabi"}
        ],
        BMC: [
            {code: "BMC", name: "Burjeel Medical City"}
        ]
    };

    // Specialties data
    const specialties = [
        {code: "ADDICT", name: "Addiction Medicine"},
        {code: "ALLERG", name: "Allergy & Immunology"},
        {code: "ANESTH", name: "Anesthesiology"},
        {code: "AUDIOL", name: "Audiology"},
        {code: "BARIATR", name: "Bariatric Surgery"},
        {code: "BREAST", name: "Breast Surgery"},
        {code: "CARD", name: "Cardiology"},
        {code: "CARDIO", name: "Cardiothoracic Surgery"},
        {code: "CLINNUT", name: "Clinical Nutrition"},
        {code: "COLOREC", name: "Colorectal Surgery"},
        {code: "COSMET", name: "Cosmetic Medicine"},
        {code: "CRANIO", name: "Craniofacial Surgery"},
        {code: "CRITC", name: "Critical Care Medicine"},
        {code: "DENTAL", name: "Dentistry"},
        {code: "DERM", name: "Dermatology"},
        {code: "DIAB", name: "Diabetes Care"},
        {code: "DIAGRAD", name: "Diagnostic Radiology"},
        {code: "DIET", name: "Dietetics"},
        {code: "ENDO", name: "Endocrinology"},
        {code: "ENT", name: "Ear, Nose & Throat Surgery"},
        {code: "ER", name: "Emergency Medicine"},
        {code: "FAMMED", name: "Family Medicine"},
        {code: "FERT", name: "Fertility"},
        {code: "GASTRO", name: "Gastroenterology"},
        {code: "GENSURG", name: "General Surgery"},
        {code: "GERIAT", name: "Geriatrics"},
        {code: "GYN", name: "Gynecology"},
        {code: "HEMAT", name: "Hematology"},
        {code: "HEMONC", name: "Hematology Oncology"},
        {code: "HEPAT", name: "Hepatology"},
        {code: "HEPBIL", name: "Hepatobiliary Surgery"},
        {code: "INFECT", name: "Infectious Disease"},
        {code: "INTERV", name: "Interventional Radiology"},
        {code: "INTMED", name: "Internal Medicine"},
        {code: "IVF", name: "In Vitro Fertilization"},
        {code: "MAXFAC", name: "Maxillofacial Surgery"},
        {code: "NEONAT", name: "Neonatology"},
        {code: "NEPH", name: "Nephrology"},
        {code: "NEURO", name: "Neurology"},
        {code: "NEURSURG", name: "Neurosurgery"},
        {code: "NUCLMED", name: "Nuclear Medicine"},
        {code: "OB", name: "Obstetrics"},
        {code: "OBGYN", name: "Obstetrics & Gynecology"},
        {code: "ONCO", name: "Oncology"},
        {code: "ONCSURG", name: "Oncological Surgery"},
        {code: "OPHTH", name: "Ophthalmology"},
        {code: "OPHTHALM", name: "Ophthalmic Surgery"},
        {code: "OPTOM", name: "Optometry"},
        {code: "ORTH", name: "Orthopedic Surgery"},
        {code: "PAIN", name: "Pain Management"},
        {code: "PALLIA", name: "Palliative Care"},
        {code: "PATH", name: "Pathology"},
        {code: "PEDISURG", name: "Pediatric Surgery"},
        {code: "PEDS", name: "Pediatrics"},
        {code: "PHLEB", name: "Phlebology"},
        {code: "PHYS", name: "Physiotherapy"},
        {code: "PHYSMED", name: "Physical Medicine & Rehabilitation"},
        {code: "PLAST", name: "Plastic & Reconstructive Surgery"},
        {code: "PODIAT", name: "Podiatry"},
        {code: "PSYCH", name: "Psychiatry"},
        {code: "PSYCHOL", name: "Psychology"},
        {code: "PULM", name: "Pulmonology"},
        {code: "RAD", name: "Radiology"},
        {code: "RADONC", name: "Radiation Oncology"},
        {code: "REHAB", name: "Rehabilitation Medicine"},
        {code: "RENAL", name: "Renal Medicine"},
        {code: "REPRO", name: "Reproductive Medicine"},
        {code: "RHEUM", name: "Rheumatology"},
        {code: "ROBOTSURG", name: "Robotic Surgery"},
        {code: "SLEEP", name: "Sleep Medicine"},
        {code: "SPEECH", name: "Speech Therapy"},
        {code: "SPINE", name: "Spine Surgery"},
        {code: "SPORT", name: "Sports Medicine"},
        {code: "THORAC", name: "Thoracic Surgery"},
        {code: "TRANSPL", name: "Transplant Surgery"},
        {code: "TRAUMA", name: "Trauma Surgery"},
        {code: "UROLOG", name: "Urology"},
        {code: "UROLSURG", name: "Urological Surgery"},
        {code: "VASCSURG", name: "Vascular Surgery"}
    ];

    // Month to quarter mapping
    const monthToQuarter = {
        'JAN': 'Q1', 'FEB': 'Q1', 'MAR': 'Q1',
        'APR': 'Q2', 'MAY': 'Q2', 'JUN': 'Q2',
        'JUL': 'Q3', 'AUG': 'Q3', 'SEP': 'Q3',
        'OCT': 'Q4', 'NOV': 'Q4', 'DEC': 'Q4'
    };

    // Elements
    const brandSelect = document.getElementById('brand');
    const facilitySelect = document.getElementById('facility');
    const monthSelect = document.getElementById('month');
    const quarterSelect = document.getElementById('quarter');
    const specialtySelect = document.getElementById('specialty');
    const generateBtn = document.getElementById('generate');
    const resetBtn = document.getElementById('reset');
    const copyBtn = document.getElementById('copy');
    const resultContainer = document.querySelector('.result-container');
    const resultElement = document.getElementById('result');

    // Populate specialty dropdown
    specialties.forEach(specialty => {
        const option = document.createElement('option');
        option.value = specialty.code;
        option.textContent = `${specialty.code} - ${specialty.name}`;
        specialtySelect.appendChild(option);
    });

    // Populate facility dropdown based on brand selection
    brandSelect.addEventListener('change', function() {
        const brandValue = this.value;
        
        // Clear existing options
        facilitySelect.innerHTML = '<option value="">Select Facility</option>';
        
        if (brandValue && facilities[brandValue]) {
            facilities[brandValue].forEach(facility => {
                const option = document.createElement('option');
                option.value = facility.code;
                option.textContent = `${facility.code} - ${facility.name}`;
                facilitySelect.appendChild(option);
            });
        }
    });

    // Auto-select quarter based on month
    monthSelect.addEventListener('change', function() {
        const monthValue = this.value;
        if (monthValue && monthToQuarter[monthValue]) {
            quarterSelect.value = monthToQuarter[monthValue];
        }
    });

    // Add animation effects to form controls
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        // Add focus effects
        control.addEventListener('focus', function() {
            this.closest('.form-group').classList.add('field-focused');
            this.closest('.form-group').classList.add('focused');
        });
        
        control.addEventListener('blur', function() {
            this.closest('.form-group').classList.remove('field-focused');
            this.closest('.form-group').classList.remove('focused');
        });
        
        // Add validation visual cues
        control.addEventListener('change', function() {
            if (this.value) {
                this.style.borderColor = '#8b0648';
            } else {
                this.style.borderColor = '';
            }
        });
    });

    // Enhanced generate button with loading effect
    generateBtn.addEventListener('click', function() {
        const brand = brandSelect.value;
        const facility = facilitySelect.value;
        const month = monthSelect.value;
        const quarter = quarterSelect.value;
        const year = document.getElementById('year').value;
        const specialty = specialtySelect.value;
        const serviceType = document.getElementById('serviceType').value;
        const objective = document.getElementById('objective').value;
        const cta = document.getElementById('cta').value;
        const region = document.getElementById('region').value;
        const variant = document.getElementById('variant').value;
        const campaignName = document.getElementById('campaignName').value;
        
        // Validate all fields are filled
        const requiredFields = [brand, facility, month, quarter, year, specialty, 
                               serviceType, objective, cta, region, variant];
        
        const allFieldsFilled = requiredFields.every(field => field !== "");
        
        if (!allFieldsFilled) {
            // Add shake animation to empty fields
            requiredFields.forEach((field, index) => {
                if (!field) {
                    const elements = document.querySelectorAll('.form-control');
                    elements[index].classList.add('is-invalid');
                    
                    setTimeout(() => {
                        elements[index].classList.remove('is-invalid');
                    }, 500);
                }
            });
            
            alert("Please fill in all required fields");
            return;
        }
        
        // Add loading animation
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        this.disabled = true;
        
        // Simulate processing (remove this setTimeout in production)
        setTimeout(() => {
            // Generate the campaign name
            const generatedName = `${brand}_${facility}_${month}_${quarter}_${year}_${specialty}_${serviceType}_${objective}_${cta}_${region}_${variant}_${campaignName}`;
            
            // Display the result with animation
            resultElement.textContent = generatedName;
            resultContainer.classList.add('show');
            
            // Reset button
            this.innerHTML = '<i class="fas fa-magic"></i> Generate Campaign Name';
            this.disabled = false;
            
            // Scroll to result
            resultContainer.scrollIntoView({ behavior: 'smooth' });
        }, 800); // Simulated delay for effect
    });

    // Reset form
    resetBtn.addEventListener('click', function() {
        const formElements = document.querySelectorAll('.form-control');
        formElements.forEach(element => {
            element.value = '';
        });
        
        // Hide result
        resultContainer.classList.remove('show');
    });

    // Enhanced copy button with bounce animation
    copyBtn.addEventListener('click', function() {
        const textToCopy = resultElement.textContent;
        
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    // Change button text with animation
                    this.classList.add('copied');
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    this.style.backgroundColor = '#28a745';
                    this.style.animation = 'bounce 0.5s';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.backgroundColor = '';
                        this.style.animation = '';
                        this.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Could not copy text: ', err);
                });
        }
    });

    // Add auto-suggestion for facility based on region
    document.getElementById('region').addEventListener('change', function() {
        const regionValue = this.value;
        const brandValue = brandSelect.value;
        
        if (regionValue && brandValue && facilities[brandValue]) {
            // Try to suggest a facility that matches the region
            const regionMapping = {
                'AD': ['Abu Dhabi'],
                'DXB': ['Dubai'],
                'SHJ': ['Sharjah'],
                'AIN': ['Al Ain']
            };
            
            const keywords = regionMapping[regionValue] || [];
            
            if (keywords.length > 0) {
                // Find first facility that contains any of the keywords
                const suggestedFacility = facilities[brandValue].find(facility => 
                    keywords.some(keyword => facility.name.includes(keyword))
                );
                
                if (suggestedFacility) {
                    facilitySelect.value = suggestedFacility.code;
                }
            }
        }
    });
});
