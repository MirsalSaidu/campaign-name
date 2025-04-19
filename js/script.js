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

    // Elements (ensure these are defined before use)
    const brandSelect = document.getElementById('brand');
    const facilitySelect = document.getElementById('facility');
    const monthSelect = document.getElementById('month');
    const quarterSelect = document.getElementById('quarter');
    const yearSelect = document.getElementById('year'); // Get year select
    const specialtySelect = document.getElementById('specialty'); // Hidden select
    const specialtySearch = document.getElementById('specialty-search'); // Input field
    const specialtyOptions = document.getElementById('specialty-options'); // UL for dropdown list
    const selectDropdown = specialtySearch.closest('.select-dropdown'); // Container div
    const specialtyFormGroup = specialtySearch.closest('.form-group'); // Parent form-group
    
    const serviceTypeSelect = document.getElementById('serviceType'); // Service Type select
    const objectiveSelect = document.getElementById('objective'); // Objective select
    const ctaSelect = document.getElementById('cta'); // CTA select
    const regionSelect = document.getElementById('region'); // Region select
    const variantSelect = document.getElementById('variant'); // Variant select

    // Dynamic Detail Field Elements
    const dynamicDetailGroup = document.getElementById('dynamicDetailGroup'); // Get the form group
    const dynamicDetailLabel = document.getElementById('dynamicDetailLabel');
    const dynamicDetailInput = document.getElementById('dynamicDetailInput');

    const generateBtn = document.getElementById('generate');
    const resetBtn = document.getElementById('reset');
    const copyBtn = document.getElementById('copy');
    const resultContainer = document.querySelector('.result-container');
    const resultElement = document.getElementById('result');

    // --- Populate Specialty Dropdown ---
    specialtyOptions.innerHTML = ''; // Clear visible list first
    // Ensure hidden select is also clear if needed, though typically populated once
    // specialtySelect.innerHTML = '<option value="">Select Specialty</option>'; 

    specialties.forEach(specialty => {
        // Add to hidden select
        const option = document.createElement('option');
        option.value = specialty.code;
        option.textContent = `${specialty.code} - ${specialty.name}`;
        specialtySelect.appendChild(option);
        
        // Add to visible dropdown list (UL)
        const li = document.createElement('li');
        li.dataset.value = specialty.code;
        li.textContent = `${specialty.code} - ${specialty.name}`;
        
        // Add click listener *directly* here after creating the li
        li.addEventListener('click', function() {
            const value = this.dataset.value;
            const text = this.textContent;
            specialtySearch.value = text; // Set input value
            specialtySelect.value = value; // Set hidden select value
            closeAllDropdowns(); // Close the dropdown
        });
        
        specialtyOptions.appendChild(li); // Append to the visible list
    });
    // --- End Specialty Population ---

    // --- Event Listeners (Should come after element definitions and population) ---

    // Update Dynamic Detail Field based on Service Type
    serviceTypeSelect.addEventListener('change', function() {
        const selectedType = this.value;
        
        // Hide or show the dynamic field group
        if (selectedType) {
            dynamicDetailGroup.classList.remove('hidden-by-default');
             dynamicDetailGroup.classList.add('visible');
        } else {
            dynamicDetailGroup.classList.add('hidden-by-default');
             dynamicDetailGroup.classList.remove('visible');
            dynamicDetailLabel.textContent = 'Description';
            dynamicDetailInput.placeholder = 'Enter description';
            dynamicDetailInput.value = '';
            dynamicDetailInput.classList.remove('is-invalid');
            return;
        }

        // Update label and placeholder based on selected type
        switch (selectedType) {
            case 'DOC':
                dynamicDetailLabel.textContent = 'Doctor Name';
                dynamicDetailInput.placeholder = 'Enter Doctor Name';
                break;
            case 'SVC':
                dynamicDetailLabel.textContent = 'Service Name';
                dynamicDetailInput.placeholder = 'Enter Service Name';
                break;
            case 'PROD':
                dynamicDetailLabel.textContent = 'Product Name';
                dynamicDetailInput.placeholder = 'Enter Product Name';
                break;
        }
        
        dynamicDetailInput.value = '';
        dynamicDetailInput.classList.remove('is-invalid');
    });

    // Populate facility dropdown based on brand selection
    brandSelect.addEventListener('change', function() {
        const brandValue = this.value;
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
    const formControls = document.querySelectorAll('.form-control:not(#specialty), #specialty-search'); 
    formControls.forEach(control => {
        // Add focus effects
        control.addEventListener('focus', function() {
            // Don't apply focus styles if it's the hidden specialty select
            if (this.id === 'specialty') return; 
            
            const parentGroup = this.closest('.form-group');
            if (parentGroup) {
                parentGroup.classList.add('field-focused');
                parentGroup.classList.add('focused');
            }
        });
        
        control.addEventListener('blur', function() {
            if (this.id === 'specialty') return;

            const parentGroup = this.closest('.form-group');
             if (parentGroup) {
                parentGroup.classList.remove('field-focused');
                parentGroup.classList.remove('focused');
             }
        });
        
        // Add validation visual cues
        control.addEventListener('change', function() {
            if (this.id === 'specialty') return; // Ignore hidden select
            
            if (this.value) {
                this.style.borderColor = 'var(--primary-color)'; // Use CSS variable
            } else {
                this.style.borderColor = ''; // Revert to default
            }
        });
    });

    // Enhanced generate button with loading effect
    generateBtn.addEventListener('click', function() {
        const brand = brandSelect.value;
        const facility = facilitySelect.value;
        const month = monthSelect.value;
        const quarter = quarterSelect.value;
        const year = yearSelect.value;
        const specialty = specialtySelect.value; 
        const serviceType = serviceTypeSelect.value;
        const objective = objectiveSelect.value;
        const cta = ctaSelect.value;
        const regionVal = regionSelect.value; 
        const variant = variantSelect.value;
        // Only get dynamic detail value if the service type is selected
        const dynamicDetailValue = serviceType ? dynamicDetailInput.value : ''; 
        
        // Base controls for validation
        const baseControls = [
            brandSelect, facilitySelect, monthSelect, quarterSelect, 
            yearSelect, specialtySearch, serviceTypeSelect, 
            objectiveSelect, ctaSelect, regionSelect, variantSelect
        ];
        // Conditionally add dynamic input to validation
        const allControls = serviceType ? [...baseControls, dynamicDetailInput] : baseControls;

        let allFieldsFilled = true;
        allControls.forEach((control) => {
            const valueToCheck = control.id === 'specialty-search' ? specialtySelect.value : control.value;
            
            control.classList.remove('is-invalid'); 
            if (!valueToCheck) {
                allFieldsFilled = false;
                control.classList.add('is-invalid');
                setTimeout(() => {
                    control.classList.remove('is-invalid');
                }, 600); 
            }
        });
        
        if (!allFieldsFilled) {
            alert("Please fill in all required fields");
            return;
        }
        
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        this.disabled = true;
        
        setTimeout(() => {
            // Generate the campaign name - use dynamicDetailValue (will be empty if serviceType not selected)
            const generatedName = `${brand}_${facility}_${month}_${quarter}_${year}_${specialty}_${serviceType}_${objective}_${cta}_${regionVal}_${variant}_${dynamicDetailValue}`;
            
            resultElement.textContent = generatedName;
            resultContainer.classList.add('show');
            this.innerHTML = '<i class="fas fa-magic"></i> Generate Campaign Name';
            this.disabled = false;
            resultContainer.scrollIntoView({ behavior: 'smooth' });
        }, 800); 
    });

    // Reset form
    resetBtn.addEventListener('click', function() {
        // Reset standard controls
        [brandSelect, facilitySelect, monthSelect, quarterSelect, yearSelect, 
         serviceTypeSelect, objectiveSelect, ctaSelect, regionSelect, variantSelect]
        .forEach(element => { element.value = ''; });

        specialtySearch.value = ''; 
        specialtySelect.value = ''; 
        
        dynamicDetailInput.value = ''; 
        dynamicDetailLabel.textContent = 'Description';
        dynamicDetailInput.placeholder = 'Enter description';
        dynamicDetailGroup.classList.add('hidden-by-default'); // Ensure it's hidden on reset
        dynamicDetailGroup.classList.remove('visible'); 
        
        facilitySelect.innerHTML = '<option value="">Select Facility</option>'; 
        quarterSelect.value = ''; 

        resultContainer.classList.remove('show'); 
        closeAllDropdowns(); 

        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    });

    // Enhanced copy button
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

    // Auto-suggestion for facility based on region
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

    // --- Specialty Dropdown Logic ---

    // Toggle dropdown when clicking on input
    specialtySearch.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent document click listener
        const isActive = selectDropdown.classList.contains('active');
        closeAllDropdowns(); // Close others first
        if (!isActive) {
          selectDropdown.classList.add('active');
          specialtyFormGroup.classList.add('dropdown-active');
        }
    });

    // Make dropdown icon clickable too
    const dropdownIcon = selectDropdown.querySelector('.dropdown-icon');
    if (dropdownIcon) {
        dropdownIcon.style.pointerEvents = 'auto'; // Make clickable
        dropdownIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = selectDropdown.classList.contains('active');
            closeAllDropdowns();
            if (!isActive) {
                selectDropdown.classList.add('active');
                specialtyFormGroup.classList.add('dropdown-active');
            }
        });
    }

    // Filter options based on search input
    specialtySearch.addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const listItems = specialtyOptions.getElementsByTagName('li');
        let hasVisibleItems = false;

        for (let i = 0; i < listItems.length; i++) {
            const text = listItems[i].textContent.toLowerCase();
            if (text.includes(filter)) {
                listItems[i].style.display = '';
                hasVisibleItems = true;
            } else {
                listItems[i].style.display = 'none';
            }
        }

        // Show dropdown if searching and results exist
        if (!selectDropdown.classList.contains('active') && hasVisibleItems) {
             selectDropdown.classList.add('active');
             specialtyFormGroup.classList.add('dropdown-active');
        } 
        // Optional: Hide if no results? Decide based on UX preference.
        // else if (!hasVisibleItems && selectDropdown.classList.contains('active')) {
        //     selectDropdown.classList.remove('active');
        //     specialtyFormGroup.classList.remove('dropdown-active');
        // }
    });

    // Helper function to close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('.select-dropdown.active').forEach(dropdown => {
            dropdown.classList.remove('active');
            const formGroup = dropdown.closest('.form-group');
            if (formGroup) {
                formGroup.classList.remove('dropdown-active');
            }
        });
    }

    // Global click listener to close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.select-dropdown.active')) {
            closeAllDropdowns();
        }
    });
    // --- End Specialty Dropdown Logic ---
});
