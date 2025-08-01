// Add this at the very top of your script file, before any other code
let selectedFacilityMap = new Map();

document.addEventListener('DOMContentLoaded', function() {
    // Data for facilities
    const facilities = {
        BUR: [
            {code: "Burjeel Brand", name: "Burjeel All Brands"},
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
            {code: "BDSC Dhafra", name: "Burjeel Day Surgery Centre Al Dhafra"},
            {code: "BMC Saadiyat", name: "Burjeel by the Beach Clinic Saadiyat Island"}
        ],
        LLH: [
            {code: "LLH Brand", name: "LLH All Brands"},
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
            {code: "Medeor Brand", name: "Medeor All Brands"},
            {code: "MED Abu Dhabi", name: "Medeor Hospital Abu Dhabi"},
            {code: "MED Dubai", name: "Medeor Hospital Dubai"},
            {code: "MedM Abu Dhabi", name: "Medeor Medical Center Abu Dhabi"}
        ],
        BMC: [
            {code: "BMC", name: "Burjeel Medical City"},
            {code: "IVF", name: "Trust Fertility Clinic"}
        ]
    };

    // Specialties data
    const specialties = [
        {code: "GEN", name: "General"},
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

    // First, let's create a more robust mapping system that can handle partial matches
    const facilityCodeMapping = {
        "Burjeel Holdings": "BHL1",
        "Burjeel Hospital Abu Dhabi": "BU10",
        "Burjeel Medical City": "BM10",
        "Burjeel Medical City Abu Dhabi": "BM10",
        "Trust Fertility Clinic": "BM11",
        "BMC": "BM10",
        "Burjeel Day Surgery Center Al Reem Island": "BN01",
        "BDSC Reem": "BN01",
        "Burjeel Hospital Dubai": "DU10",
        "BH Dubai": "DU10",
        "Burjeel Specialty Hospital Sharjah": "BS10",
        "BH Sharjah": "BS10",
        "Burjeel Royal Hospital Al Ain": "BR10",
        "BRH Al Ain": "BR10",
        "Burjeel Royal Asharej Al Ain": "BA01",
        "BRH Asharej": "BA01",
        "Burjeel Medical Center Al Shamkha Makani Mall": "BM02",
        "BMC Shamkha": "BM02",
        "Burjeel Day Surgery Center Al Shahama Deerfields Mall": "BM01",
        "BDSC Shahama": "BM01",
        "Burjeel Medical Centre Al Marina": "HP01",
        "BMC Marina": "HP01",
        "Burjeel Medical Center Barari Al Ain": "BM03",
        "BMC Barari": "BM03",
        "Burjeel Medical Centre Al Zeina Al Raha Beach": "MC03",
        "BMC Al Zeina": "MC03",
        "Barari for One Day Surgery Center Al Ain": "BN05",
        "BDSC Barari": "BN05",
        "Burjeel Day Surgery Centre Al Dhafra": "BN03",
        "BDSC Dhafra": "BN03",
        "Burjeel by the Beach Clinic Saadiyat Island": "BM08",
        "BMC Saadiyat": "BM08",
        "Medeor Hospital Abu Dhabi": "MH01",
        "MED Abu Dhabi": "MH01",
        "Medeor Hospital Dubai": "MH02",
        "MED Dubai": "MH02",
        "Medeor Medical Center Abu Dhabi": "MM01",
        "MedM Abu Dhabi": "MM01",
        "LLH Hospital Abu Dhabi": "LH10",
        "LLH Abu Dhabi": "LH10",
        "LLH Hospital Musaffah": "LL01",
        "LLH Musaffah": "LL01",
        "LLH Medical Center Musaffah": "LL02",
        "LLHM Musaffah": "LL02",
        "LLH Oasis Medical Centre Madinat Zayed": "LL05",
        "LLH Oasis": "LL05",
        "LLH Medical Centre Al Ain": "LL13",
        "LLHM Al Ain": "LL13",
        "LLH Medical Centre Al Najda, Abu Dhabi": "LL18",
        "LLHM Al Najda": "LL18",
        "Lifecare Hospital Musaffah": "LC01",
        "Lifecare": "LC01",
        "Tajmeel Clinic – Al Karamah Abu Dhabi": "TM01",
        "Tajmeel Clinic - Aldar HQ Abu Dhabi": "TM02",
        "Tajmeel Clinic - Shahama Abu Dhabi": "TM03",
        "Tajmeel Clinic – Barari Mall Al Ain": "TM04",
        "Tajmeel Clinic - Sheikh Zayed Road Dubai": "TM05",
        "Tajmeel Royal Dental Clinic Abu Dhabi": "TM06"
    };

    // Create the facility code field HTML
    const facilityCodeHtml = `
    <div class="form-group">
      <label for="facilityCode">Facility Code</label>
      <input type="text" id="facilityCode" class="form-control" readonly>
    </div>
    `;

    // Add this to your JavaScript after the elements are defined
    // Insert the Facility Code field after Facility dropdown
    const facilityCodeField = document.createElement('div');
    facilityCodeField.innerHTML = facilityCodeHtml;
    const facilityFormGroup = facilitySelect.closest('.form-group');
    facilityFormGroup.parentNode.insertBefore(facilityCodeField.firstElementChild, facilityFormGroup.nextSibling);

    // Now get a reference to the new field
    const facilityCodeInput = document.getElementById('facilityCode');

    // Update the facility code when facility is selected
    facilitySelect.addEventListener('change', function() {
        const selectedFacility = this.options[this.selectedIndex];
        if (!selectedFacility || selectedFacility.value === "") {
            facilityCodeInput.value = '';
            return;
        }
        
        // Get both the code and full name from the option text
        const optionText = selectedFacility.textContent;
        const facilityCode = selectedFacility.value;
        
        // Try direct match with the option text first
        if (facilityCodeMapping[optionText]) {
            facilityCodeInput.value = facilityCodeMapping[optionText];
            return;
        }
        
        // Try match with just the code part (like "BDSC Shahama")
        if (facilityCodeMapping[facilityCode]) {
            facilityCodeInput.value = facilityCodeMapping[facilityCode];
            return;
        }
        
        // Try to extract the name part after the dash and match
        const parts = optionText.split(' - ');
        if (parts.length > 1) {
            const facilityName = parts[1].trim();
            if (facilityCodeMapping[facilityName]) {
                facilityCodeInput.value = facilityCodeMapping[facilityName];
                return;
            }
        }
        
        // Try to match the code part before the dash
        if (parts.length > 0) {
            const shortCode = parts[0].trim();
            if (facilityCodeMapping[shortCode]) {
                facilityCodeInput.value = facilityCodeMapping[shortCode];
                return;
            }
        }
        
        // If all else fails, try a partial match
        for (const key in facilityCodeMapping) {
            if (optionText.includes(key) || key.includes(optionText)) {
                facilityCodeInput.value = facilityCodeMapping[key];
                return;
            }
        }
        
        // No match found
        facilityCodeInput.value = '';
    });

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

    // NOW define the autoSelectCurrentDate function AFTER element definitions
    function autoSelectCurrentDate() {
        const now = new Date();
        
        // Auto-select month
        const currentMonth = now.getMonth(); // 0-11
        const monthCodes = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const monthCode = monthCodes[currentMonth];
        monthSelect.value = monthCode;
        
        // Explicitly set quarter based on selected month
        if (monthCode && monthToQuarter[monthCode]) {
            quarterSelect.value = monthToQuarter[monthCode];
        }
        
        // Auto-select year
        const currentYear = now.getFullYear();
        const shortYear = currentYear.toString().substr(2); // Get last 2 digits
        
        // Try to find matching year in dropdown
        const yearOptions = yearSelect.options;
        let yearFound = false;
        
        for (let i = 0; i < yearOptions.length; i++) {
            if (yearOptions[i].value === shortYear) {
                yearSelect.selectedIndex = i;
                yearFound = true;
                break;
            }
        }
        
        // If exact year not found but we have options, select nearest future year
        if (!yearFound && yearOptions.length > 1) {
            for (let i = 1; i < yearOptions.length; i++) {
                if (parseInt(yearOptions[i].value) >= parseInt(shortYear)) {
                    yearSelect.selectedIndex = i;
                    break;
                }
            }
        }
        
        // Also dispatch the change event to ensure all handlers run
        if (monthSelect.value) {
            const event = new Event('change');
            monthSelect.dispatchEvent(event);
        }
    }
    
    // Add this after defining the autoSelectCurrentDate function:
    let dateAutoPopulated = false;

    // Add this after all form elements are defined and before other event listeners:
    function setupAutoPopulateOnFirstInteraction() {
        // Get only select elements - we want this to happen on actual selections, not clicks
        const selectElements = document.querySelectorAll('select');
        
        const handleFirstSelection = function() {
            if (!dateAutoPopulated) {
                dateAutoPopulated = true;
                autoSelectCurrentDate();
                
                // Remove all selection listeners
                selectElements.forEach(el => {
                    el.removeEventListener('change', handleFirstSelection);
                });
            }
        };
        
        // Add change listeners to select elements only
        selectElements.forEach(el => {
            el.addEventListener('change', handleFirstSelection);
        });
    }

    // Call this function after all elements are defined
    setupAutoPopulateOnFirstInteraction();

    // --- Event Listeners (Should come after element definitions and population) ---

    // Update Dynamic Detail Field based on Service Type
    serviceTypeSelect.addEventListener('change', function() {
        const selectedType = this.value;
        const dynamicDetailGroupElement = document.getElementById('dynamicDetailGroup');
        
        // Hide or show the dynamic field group
        if (selectedType) {
            dynamicDetailGroupElement.style.display = "inline-block";
            dynamicDetailGroup.classList.remove('hidden-by-default');
            dynamicDetailGroup.classList.add('visible');
        } else {
            dynamicDetailGroupElement.style.display = "none";
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
        
        // Remove this block that automatically sets facility code on brand selection
        /*
        if (brandValue) {
            // Map brand value to code
            const brandCodes = {
                "BUR": "BHL1", // Burjeel
                "LLH": "LLH1", // LLH
                "LFC": "LC01", // Lifecare
                "MED": "MED1", // Medeor
                "BMC": "BM10"  // Burjeel Medical City
            };
            facilityCodeInput.value = brandCodes[brandValue] || brandValue;
        } else {
            facilityCodeInput.value = '';
        }
        */
        
        // Clear the facility code when changing brand
        facilityCodeInput.value = '';
        
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

    // Add this code in the HTML portion to create the Campaign Type dropdown
    const campaignTypeHtml = `
    <div class="form-group">
      <label for="campaignType">Campaign Type</label>
      <select id="campaignType" class="form-control">
        <option value="">Select Campaign Type</option>
        <option value="CAMP">Campaign</option>
        <option value="BOOST">Boosting</option>
      </select>
    </div>
    `;

    // Insert the Campaign Type dropdown after Service Type dropdown
    const campaignTypeSelect = document.createElement('div');
    campaignTypeSelect.innerHTML = campaignTypeHtml;
    const serviceTypeFormGroup = serviceTypeSelect.closest('.form-group');
    serviceTypeFormGroup.parentNode.insertBefore(campaignTypeSelect.firstElementChild, serviceTypeFormGroup.nextSibling);

    // Now get a reference to the new dropdown
    const campaignTypeDropdown = document.getElementById('campaignType');

    // Function to modify form elements
    function modifyFormElements() {
        // Find the CTA and Service Type form groups
        const ctaFormGroup = document.getElementById('cta')?.closest('.form-group');
        const serviceTypeFormGroup = document.getElementById('serviceType')?.closest('.form-group');
        
        // Remove them from the DOM
        if (ctaFormGroup && ctaFormGroup.parentNode) {
            ctaFormGroup.parentNode.removeChild(ctaFormGroup);
        }
        
        if (serviceTypeFormGroup && serviceTypeFormGroup.parentNode) {
            serviceTypeFormGroup.parentNode.removeChild(serviceTypeFormGroup);
        }
        
        // Add a new Service Name field that's always visible
        const serviceNameHtml = `
        <div class="form-group" id="serviceNameGroup">
          <label for="serviceName">Service Name</label>
          <input type="text" id="serviceName" class="form-control" placeholder="Enter Service Name">
        </div>
        `;
        
        // Find where to insert the service name field (after Region)
        const regionFormGroup = document.getElementById('region')?.closest('.form-group');
        if (regionFormGroup && regionFormGroup.parentNode) {
            const serviceNameField = document.createElement('div');
            serviceNameField.innerHTML = serviceNameHtml;
            regionFormGroup.parentNode.insertBefore(serviceNameField.firstElementChild, regionFormGroup.nextSibling);
        }
    }

    // Call this function after all DOM elements are loaded
    modifyFormElements();

    // Get reference to the new service name field
    const serviceNameInput = document.getElementById('serviceName');

    // Update the generate button to format Google Ads output correctly
    generateBtn.addEventListener('click', function() {
        // Get the active platform
        const activePlatform = document.querySelector('.tab.active').dataset.tab;
        
        // Get selected facilities from the global selectedFacilityMap
        const selectedFacilities = Array.from(selectedFacilityMap.values());
        if (selectedFacilities.length === 0) {
            showNotification('Required Fields', 'Please select at least one facility', 'error');
            return;
        }
        
        // Get facility codes
        const facilityCodesRaw = facilityCodeInput.value; // Comma-separated from input
        const facilityCodesUnderscore = facilityCodesRaw.replace(/,\s*/g, '_');
        
        // Create a better display name for facilities
        // Instead of using "BH Abu Dhabi+2", use proper format like "BM10+4"
        let facilityDisplayName;
        if (selectedFacilities.length > 0) {
            // Use the first facility code (not name) for display
            facilityDisplayName = selectedFacilities[0].code;
            if (selectedFacilities.length > 1) {
                facilityDisplayName += `+${selectedFacilities.length - 1}`;
            }
        } else {
            facilityDisplayName = "";
        }
        
        // Get other values
        const month = monthSelect.value;
        const quarter = quarterSelect.value;
        const yearCode = yearSelect.value;
        const serviceName = serviceNameInput.value;
        
        // Get campaign type only for Meta
        const campaignType = activePlatform === 'meta' ? campaignTypeDropdown.value : '';
        
        // Extract the full year
        let fullYear = "";
        if (yearCode) {
            const selectedOption = yearSelect.options[yearSelect.selectedIndex];
            const match = selectedOption.textContent.match(/\d{4}/);
            if (match) {
                fullYear = match[0];
            } else {
                fullYear = "20" + yearCode;
            }
        }
        
        const specialty = specialtySelect.value || 'GEN'; // Default to GEN if not selected
        const objective = objectiveSelect.value;
        const regionVal = regionSelect.value;
        
        // Validation fields based on platform
        const baseControls = [
            monthSelect, quarterSelect, yearSelect, 
            objectiveSelect, regionSelect,
            serviceNameInput
        ];
        
        // For Meta, add campaign type validation
        if (activePlatform === 'meta') {
            baseControls.push(campaignTypeDropdown);
        }
        
        let allFieldsFilled = true;
        baseControls.forEach((control) => {
            if (!control) return; // Skip if control doesn't exist
            
            const valueToCheck = control.value;
            
            control.classList.remove('is-invalid'); 
            if (!valueToCheck) {
                allFieldsFilled = false;
                control.classList.add('is-invalid');
                setTimeout(() => {
                    control.classList.remove('is-invalid');
                }, 600); 
            }
        });
        
        // Check if at least one facility is selected
        if (selectedFacilities.length === 0) {
            allFieldsFilled = false;
            document.getElementById('facility-search').classList.add('is-invalid');
            setTimeout(() => {
                document.getElementById('facility-search').classList.remove('is-invalid');
            }, 600);
        }
        
        if (!allFieldsFilled) {
            showNotification('Required Fields', 'Please fill in all required fields', 'error');
            return;
        }
        
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        this.disabled = true;
        
        setTimeout(() => {
            // Generate name based on platform
            let nameParts = [];

            // Detect if a brand-level facility (e.g., "Burjeel Brand") is the only selection
            const isBrandLevel =
                selectedFacilities.length === 1 &&
                (/brand/i.test(selectedFacilities[0].code) || /brand/i.test(selectedFacilities[0].name));

            // Prepare brand segment if needed
            let brandSegment = '';
            if (isBrandLevel) {
                const brandText = brandSelect.options[brandSelect.selectedIndex]?.textContent || '';
                const brandName = brandText.split(' - ')[1]?.trim() || brandText.trim();
                brandSegment = `Brand-${brandName}`;
            }

            if (activePlatform === 'meta') {
                if (isBrandLevel) {
                    // brand-level already handled
                    nameParts = [
                        campaignType,
                        brandSegment,
                        month,
                        fullYear,
                        quarter,
                        specialty,
                        objective,
                        regionVal,
                        serviceName
                    ];
                } else if (selectedFacilities.length === 1) {
                    // Single facility format: CODE-SHORTCODE
                    const singleFacilitySegment = `${facilityCodesUnderscore}-${facilityDisplayName}`;

                    nameParts = [
                        campaignType,
                        singleFacilitySegment,
                        month,
                        fullYear,
                        quarter,
                        specialty,
                        objective,
                        regionVal,
                        serviceName
                    ];
                } else {
                    // Multiple facilities format: codes joined by '_' then '-' then display name
                    const multiFacilitySegment = `${facilityCodesUnderscore}-${facilityDisplayName}`;

                    nameParts = [
                        campaignType,
                        multiFacilitySegment,
                        month,
                        fullYear,
                        quarter,
                        specialty,
                        objective,
                        regionVal,
                        serviceName
                    ];
                }
            } else {
                if (isBrandLevel) {
                    // Brand-level Google Ads format: ServiceName_Month_Year_Quarter_Specialty_Objective_Region_Brand-Name
                    nameParts = [
                        serviceName,
                        month,
                        fullYear,
                        quarter,
                        specialty,
                        objective,
                        regionVal,
                        brandSegment
                    ];
                } else {
                    // Regular Google Ads format with facility codes (underscore-separated)
                    nameParts = [
                        serviceName,
                        facilityCodesUnderscore,
                        month,
                        fullYear,
                        quarter,
                        specialty,
                        objective,
                        regionVal,
                        facilityDisplayName
                    ];
                }
            }
            
            // Filter out empty values and join with single underscores
            const generatedName = nameParts.filter(part => part && part.trim() !== '').join('_');
            
            resultElement.textContent = generatedName;
            resultContainer.classList.add('show');
            this.innerHTML = '<i class="fas fa-magic"></i> Generate Campaign Name';
            this.disabled = false;
            resultContainer.scrollIntoView({ behavior: 'smooth' });
        }, 800);
    });

    // Update the reset function to include the service name field
    resetBtn.addEventListener('click', function() {
        // Reset standard controls
        [brandSelect, facilitySelect, monthSelect, yearSelect, quarterSelect, 
         campaignTypeDropdown, objectiveSelect, regionSelect, serviceNameInput]
        .forEach(element => { element.value = ''; });

        specialtySearch.value = ''; 
        specialtySelect.value = ''; 
        facilityCodeInput.value = '';
        
        // Clear the facility multi-select
        const selectedFacilities = document.getElementById('selected-facilities');
        const facilityOptions = document.getElementById('facility-options');
        const facilitySearch = document.getElementById('facility-search');
        if (selectedFacilities) selectedFacilities.innerHTML = '';
        if (facilityOptions) facilityOptions.innerHTML = '';
        if (facilitySearch) facilitySearch.value = '';
        
        // IMPORTANT: Clear the global selectedFacilityMap
        selectedFacilityMap.clear();
        
        facilitySelect.innerHTML = '<option value="">Select Facility</option>'; 
        quarterSelect.value = ''; 

        resultContainer.classList.remove('show');
        closeAllDropdowns(); 

        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        
        // Reset the date auto-population flag
        dateAutoPopulated = false;
        setupAutoPopulateOnFirstInteraction();
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

    // Update the repositionDynamicDetailField function to correctly position the dynamic detail field
    function repositionDynamicDetailField() {
        // Get the Region field and the dynamic detail field
        const regionFormGroup = regionSelect.closest('.form-group');
        const dynamicDetailGroupElement = document.getElementById('dynamicDetailGroup');
        
        // Verify elements exist
        if (regionFormGroup && dynamicDetailGroupElement) {
            // Get the parent row that contains the Region field
            const regionRow = regionFormGroup.parentElement;
            
            if (regionRow) {
                // Remove the dynamic detail field from its current location
                if (dynamicDetailGroupElement.parentElement) {
                    dynamicDetailGroupElement.parentElement.removeChild(dynamicDetailGroupElement);
                }
                
                // Add the dynamic detail field to the same row as Region
                regionRow.appendChild(dynamicDetailGroupElement);
                
                // Style the form groups to display inline
                regionFormGroup.style.display = "inline-block";
                regionFormGroup.style.paddingRight = "10px";
                
                // Style the dynamic detail group - initially hidden
                dynamicDetailGroupElement.style.display = "inline-block";
                dynamicDetailGroupElement.style.paddingLeft = "10px";
                dynamicDetailGroupElement.classList.add('hidden-by-default');
                
                // Ensure the field is hidden by default (not visible until service type is selected)
                if (!serviceTypeSelect.value) {
                    dynamicDetailGroupElement.style.display = "none";
                }
                
                // Style the input field to match dropdowns
                dynamicDetailInput.style.height = "38px";
                dynamicDetailInput.style.width = "100%";
                dynamicDetailInput.style.padding = "0.375rem 0.75rem";
                dynamicDetailInput.style.borderRadius = "0.25rem";
                dynamicDetailInput.style.border = "1px solid #ced4da";
                dynamicDetailInput.style.fontSize = "1rem";
                dynamicDetailInput.style.lineHeight = "1.5";
                dynamicDetailInput.style.color = "#495057";
                dynamicDetailInput.style.backgroundColor = "#fff";
                
                // Style the label consistently
                const label = dynamicDetailGroupElement.querySelector('label');
                if (label) {
                    label.style.fontWeight = "600";
                    label.style.color = "#7A093A";
                    label.style.marginBottom = "0.5rem";
                    label.style.display = "block";
                }
            }
        }
    }

    // Call this right after other DOM elements are defined and before event handlers
    // This ensures the field is properly positioned when the page loads
    repositionDynamicDetailField();

    // Add tab switching functionality
    function setupTabs() {
        const tabs = document.querySelectorAll('.tab');
        const tabsContainer = document.querySelector('.tabs-container');
        const facilityFormGroup = document.getElementById('facility').closest('.form-group');
        
        // Create the multi-select dropdown for Google Ads
        const multiSelectHtml = `
        <div class="form-group" id="multiSelectFacilityGroup" style="display: none;">
            <label for="multiSelectFacility">Facilities (Multiple Selection)</label>
            <div class="multi-select-dropdown">
                <div class="multi-select-input">
                    <input type="text" id="facility-search" placeholder="Search facilities...">
                    <span class="dropdown-icon"><i class="fas fa-chevron-down"></i></span>
                </div>
                <div class="multi-select-options" id="facility-options">
                    <!-- Will be populated by JavaScript -->
                </div>
                <div class="selected-items" id="selected-facilities">
                    <!-- Selected items will appear here -->
                </div>
            </div>
        </div>
        `;
        
        // Insert the multi-select after the regular facility dropdown
        const multiSelectElement = document.createElement('div');
        multiSelectElement.innerHTML = multiSelectHtml;
        facilityFormGroup.parentNode.insertBefore(multiSelectElement.firstElementChild, facilityFormGroup.nextSibling);
        
        // Get references to the new elements
        const multiSelectFacilityGroup = document.getElementById('multiSelectFacilityGroup');
        const facilitySearch = document.getElementById('facility-search');
        const facilityOptions = document.getElementById('facility-options');
        const selectedFacilities = document.getElementById('selected-facilities');
        
        // Platform-specific configurations
        const platformConfigs = {
            meta: {
                // Meta-specific objective options
                objectives: [
                    {value: "AWARE", text: "AWARE - Brand Awareness"},
                    {value: "REACH", text: "REACH - Reach"},
                    {value: "TRAF", text: "TRAF - Traffic"},
                    {value: "ENGAGE", text: "ENGAGE - Engagement"},
                    {value: "VIDEO", text: "VIDEO - Video Views"},
                    {value: "LEAD", text: "LEAD - Lead Generation"},
                    {value: "MSGS", text: "MSGS - Messages"},
                    {value: "CONV", text: "CONV - Conversions"},
                    {value: "CATALOG", text: "CATALOG - Catalog Sales"},
                    {value: "STORE", text: "STORE - Store Traffic"},
                    {value: "APP", text: "APP - App Promotion"}
                ]
            },
            google: {
                // Google Ads-specific objective options
                objectives: [
                    {value: "SEARCH", text: "SEARCH - Search Campaign"},
                    {value: "DISP", text: "DISP - Display Campaign"},
                    {value: "VIDEO", text: "VIDEO - Video Campaign"},
                    {value: "SHOP", text: "SHOP - Shopping Campaign"},
                    {value: "PERF", text: "PERF - Performance Max"},
                    {value: "APP", text: "APP - App Campaign"},
                    {value: "LOCAL", text: "LOCAL - Local Campaign"},
                    {value: "DISC", text: "DISC - Discovery Campaign"}
                ]
            }
        };
        
        // Function to update form based on selected platform
        function updateFormForPlatform(platform) {
            // Update objective dropdown options
            const objectiveSelect = document.getElementById('objective');
            objectiveSelect.innerHTML = '<option value="">Select Objective</option>';
            
            const objectives = platformConfigs[platform].objectives;
            objectives.forEach(obj => {
                const option = document.createElement('option');
                option.value = obj.value;
                option.textContent = obj.text;
                objectiveSelect.appendChild(option);
            });
            
            // Show multi-select facility dropdown for both platforms
            const facilityFormGroup = document.getElementById('facility').closest('.form-group');
            const multiSelectFacilityGroup = document.getElementById('multiSelectFacilityGroup');
            
            // Always show multi-select for both Meta and Google Ads
            facilityFormGroup.style.display = 'none';
            multiSelectFacilityGroup.style.display = 'block';
            
            if (platform === 'google') {
                // Hide Campaign Type field for Google Ads
                const campaignTypeGroup = document.getElementById('campaignType').closest('.form-group');
                campaignTypeGroup.style.display = 'none';
            } else {
                // Show Campaign Type field for Meta
                const campaignTypeGroup = document.getElementById('campaignType').closest('.form-group');
                campaignTypeGroup.style.display = 'block';
            }
        }
        
        // Modify the setupMultiSelect function to maintain selected facilities across brand changes
        function setupMultiSelect() {
            // Get references to the elements
            const facilitySearch = document.getElementById('facility-search');
            const facilityOptions = document.getElementById('facility-options');
            const selectedFacilities = document.getElementById('selected-facilities');
            const multiSelectDropdown = facilitySearch.closest('.multi-select-dropdown');
            
            // Create a map to store all selected facilities across brands
            // const selectedFacilityMap = new Map(); // This line is removed
            
            // ADD BACK: Toggle dropdown when clicking on input
            facilitySearch.addEventListener('click', function(e) {
                e.stopPropagation();
                multiSelectDropdown.classList.toggle('active');
                
                // Force populate options if empty
                if (facilityOptions.children.length === 0 && brandSelect.value) {
                    populateMultiSelectOptions(brandSelect.value);
                }
            });
            
            // ADD BACK: Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.multi-select-dropdown')) {
                    document.querySelectorAll('.multi-select-dropdown.active').forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                    
                    // Also close any floating dropdowns
                    const floatingDropdown = document.getElementById('current-floating-dropdown');
                    if (floatingDropdown) {
                        floatingDropdown.remove();
                    }
                }
            });
            
            // Function to populate options - modified to maintain selections
            function populateMultiSelectOptions(brandValue) {
                // Clear existing options in the dropdown
                facilityOptions.innerHTML = '';
                
                if (!brandValue || !facilities[brandValue]) {
                    // Add a message if no brand or no facilities
                    const noOptions = document.createElement('div');
                    noOptions.className = 'checkbox-item';
                    noOptions.textContent = 'No facilities available. Please select a brand first.';
                    facilityOptions.appendChild(noOptions);
                    return;
                }
                
                // Add facilities for the current brand only
                facilities[brandValue].forEach(facility => {
                    const checkboxItem = document.createElement('div');
                    checkboxItem.className = 'checkbox-item';
                    
                    // Check if this facility is already selected
                    const isSelected = selectedFacilityMap.has(facility.code);
                    
                    checkboxItem.innerHTML = `
                        <label>
                            <input type="checkbox" value="${facility.code}" data-name="${facility.name}" data-brand="${brandValue}" ${isSelected ? 'checked' : ''}>
                            <span>${facility.code} - ${facility.name}</span>
                        </label>
                    `;
                    
                    facilityOptions.appendChild(checkboxItem);
                    
                    // Add click handler for checkbox
                    const checkbox = checkboxItem.querySelector('input[type="checkbox"]');
                    checkbox.addEventListener('change', function() {
                        // Update the selectedFacilityMap based on checkbox state
                        if (this.checked) {
                            selectedFacilityMap.set(facility.code, {
                                code: facility.code,
                                name: facility.name,
                                brand: brandValue
                            });
                        } else {
                            selectedFacilityMap.delete(facility.code);
                        }
                        
                        // Update the UI
                        updateSelectedFacilities();
                    });
                    
                    // Add click handler for the label that doesn't close dropdown
                    const label = checkboxItem.querySelector('label');
                    if (label) {
                        label.addEventListener('click', function(e) {
                            e.stopPropagation(); // Prevent document click from closing dropdown
                        });
                    }
                });
                
                // Ensure the dropdown is styled correctly
                const dropdownStyle = document.createElement('style');
                dropdownStyle.textContent = `
                    .multi-select-options {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        max-height: 250px;
                        overflow-y: auto;
                        background: white;
                        border: 1px solid #ccc;
                        border-top: none;
                        border-radius: 0 0 4px 4px;
                        z-index: 1000;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    }
                    
                    .multi-select-dropdown.active .multi-select-options {
                        display: block;
                    }
                    
                    .checkbox-item {
                        padding: 8px 12px;
                        cursor: pointer;
                    }
                    
                    .checkbox-item:hover {
                        background-color: #f5f5f5;
                    }
                `;
                document.head.appendChild(dropdownStyle);
            }
            
            // Update selected facilities display based on the map
            function updateSelectedFacilities() {
                selectedFacilities.innerHTML = '';
                let facilityCodes = [];
                
                // Use the map to create selected facility tags
                for (const [code, facility] of selectedFacilityMap.entries()) {
                    // Resolve the matching facility code more robustly
                    let facilityCode = '';

                    // 1) Exact key match with facility.code (e.g., "BMC Saadiyat")
                    if (facilityCodeMapping[facility.code]) {
                        facilityCode = facilityCodeMapping[facility.code];
                    }

                    // 2) Exact key match with facility.name
                    if (!facilityCode && facilityCodeMapping[facility.name]) {
                        facilityCode = facilityCodeMapping[facility.name];
                    }

                    // 3) Case-insensitive exact match
                    if (!facilityCode) {
                        const nameLower = facility.name.toLowerCase();
                        const codeLower = facility.code.toLowerCase();
                        for (const key in facilityCodeMapping) {
                            const keyLower = key.toLowerCase();
                            if (keyLower === nameLower || keyLower === codeLower) {
                                facilityCode = facilityCodeMapping[key];
                                break;
                            }
                        }
                    }

                    // 4) Longest partial match fallback (avoids generic short keys like "BMC" winning)
                    if (!facilityCode) {
                        let bestKey = '';
                        for (const key in facilityCodeMapping) {
                            if (
                                facility.name.includes(key) ||
                                key.includes(facility.name) ||
                                facility.code.includes(key) ||
                                key.includes(facility.code)
                            ) {
                                if (key.length > bestKey.length) {
                                    bestKey = key;
                                }
                            }
                        }
                        if (bestKey) {
                            facilityCode = facilityCodeMapping[bestKey];
                        }
                    }

                    if (facilityCode) {
                        facilityCodes.push(facilityCode);
                    }

                    // Create pill/tag for each selected facility
                    const tag = document.createElement('div');
                    tag.className = 'selected-tag';
                    tag.textContent = facility.code;
                    
                    // Create remove button (×)
                    const removeBtn = document.createElement('span');
                    removeBtn.className = 'remove-tag';
                    removeBtn.innerHTML = ' &times;';
                    removeBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        
                        // Remove from map
                        selectedFacilityMap.delete(code);
                        
                        // Find and uncheck corresponding checkbox if visible
                        const checkbox = facilityOptions.querySelector(`input[value="${code}"]`);
                        if (checkbox) {
                            checkbox.checked = false;
                        }
                        
                        // Update UI
                        updateSelectedFacilities();
                    });
                    
                    tag.appendChild(removeBtn);
                    selectedFacilities.appendChild(tag);
                }
                
                // Update the facility code input with comma-separated codes
                const facilityCodeInput = document.getElementById('facilityCode');
                if (facilityCodeInput) {
                    if (facilityCodes.length > 0) {
                        facilityCodeInput.value = facilityCodes.join(', ');
                    } else {
                        facilityCodeInput.value = '';
                    }
                }
                
                // Update search input text
                if (document.activeElement !== facilitySearch) {
                    facilitySearch.value = '';
                }
            }
            
            // Update multi-select when brand changes - don't clear selections
            brandSelect.addEventListener('change', function() {
                const brandValue = this.value;
                
                // Populate with facilities from the current brand only
                populateMultiSelectOptions(brandValue);
                
                // Make sure the UI is up to date
                updateSelectedFacilities();
            });
            
            // Initial population if brand is already selected
            if (brandSelect.value) {
                populateMultiSelectOptions(brandSelect.value);
            }
        }
        
        // Set up tab click handlers
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Get platform from data attribute
                const platform = tab.dataset.tab;
                
                // Update tab indicator position
                if (platform === 'google') {
                    tabsContainer.classList.add('google');
                } else {
                    tabsContainer.classList.remove('google');
                }
                
                // Update form for selected platform
                updateFormForPlatform(platform);
            });
        });
        
        // Initialize multi-select functionality
        setupMultiSelect();
        
        // Initialize with Meta (default)
        updateFormForPlatform('meta');
    }

    // Call this function after DOM is loaded
    setupTabs();

    // Call this after creating the multi-select elements
    document.addEventListener('DOMContentLoaded', function() {
        // Add a small delay to ensure elements are fully rendered
        setTimeout(() => {
            document.querySelectorAll('.checkbox-item input[type="checkbox"]').forEach(checkbox => {
                checkbox.style.width = '16px';
                checkbox.style.height = '16px';
                checkbox.style.margin = '0 10px 0 0';
                checkbox.style.padding = '0';
            });
        }, 500);
    });

    // Add this function to your code to fix the dropdown positioning
    function fixDropdownZIndexIssues() {
        // Create a container at the end of the body for our dropdowns
        const dropdownContainer = document.createElement('div');
        dropdownContainer.id = 'floating-dropdown-container';
        dropdownContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            pointer-events: none;
            z-index: 999999;
        `;
        document.body.appendChild(dropdownContainer);
        
        // Function to position a clone of the dropdown
        function showFloatingDropdown(originalDropdown) {
            // Clear any existing floating dropdowns
            const existingFloating = document.getElementById('current-floating-dropdown');
            if (existingFloating) {
                existingFloating.remove();
            }
            
            // Clone the dropdown content
            const dropdownContent = originalDropdown.querySelector('.multi-select-options');
            if (!dropdownContent) return;
            
            const clone = dropdownContent.cloneNode(true);
            clone.id = 'current-floating-dropdown';
            
            // Position the clone at the same position as the original
            const rect = dropdownContent.getBoundingClientRect();
            clone.style.cssText = `
                position: absolute;
                top: ${rect.top}px;
                left: ${rect.left}px;
                width: ${rect.width}px;
                max-height: 250px;
                overflow-y: auto;
                background: white;
                border: 2px solid #e0d0d8;
                border-radius: 0 0 8px 8px;
                box-shadow: 0 5px 15px rgba(139, 6, 72, 0.15);
                z-index: 999999;
                pointer-events: auto;
                display: block;
            `;
            
            // Add event listeners to checkboxes in the clone
            const checkboxes = clone.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox, index) => {
                const originalCheckbox = dropdownContent.querySelectorAll('input[type="checkbox"]')[index];
                
                // Sync the initial state
                checkbox.checked = originalCheckbox.checked;
                
                // Sync changes from clone to original
                checkbox.addEventListener('change', () => {
                    originalCheckbox.checked = checkbox.checked;
                    
                    // Trigger change event on original
                    const event = new Event('change');
                    originalCheckbox.dispatchEvent(event);
                    
                    // Close dropdown after selection - NEW BEHAVIOR
                    setTimeout(() => {
                        const dropdown = originalCheckbox.closest('.multi-select-dropdown');
                        if (dropdown) {
                            dropdown.classList.remove('active');
                        }
                        clone.remove(); // Remove floating dropdown
                    }, 100);
                });
            });
            
            dropdownContainer.appendChild(clone);
            return clone;
        }
        
        // Set up click handlers for facility search input
        const facilitySearch = document.getElementById('facility-search');
        if (facilitySearch) {
            facilitySearch.addEventListener('click', function(e) {
                e.stopPropagation();
                const dropdown = this.closest('.multi-select-dropdown');
                
                if (dropdown.classList.contains('active')) {
                    // If already active, hide the floating dropdown
                    const existingFloating = document.getElementById('current-floating-dropdown');
                    if (existingFloating) {
                        existingFloating.remove();
                    }
                    dropdown.classList.remove('active');
                } else {
                    // Close any active dropdowns
                    document.querySelectorAll('.multi-select-dropdown.active').forEach(d => {
                        d.classList.remove('active');
                    });
                    
                    // Open this dropdown
                    dropdown.classList.add('active');
                    
                    // Force populate options if needed
                    const facilityOptions = document.getElementById('facility-options');
                    if (facilityOptions && facilityOptions.children.length === 0 && brandSelect.value) {
                        populateMultiSelectOptions(brandSelect.value);
                    }
                    
                    // Create the floating version
                    showFloatingDropdown(dropdown);
                }
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('#current-floating-dropdown') && 
                !e.target.closest('.multi-select-dropdown')) {
                
                document.querySelectorAll('.multi-select-dropdown.active').forEach(d => {
                    d.classList.remove('active');
                });
                
                const existingFloating = document.getElementById('current-floating-dropdown');
                if (existingFloating) {
                    existingFloating.remove();
                }
            }
        });
    }

    // Call this function after DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Wait for other scripts to initialize
        setTimeout(() => {
            fixDropdownZIndexIssues();
        }, 500);
    });
});

// Create a more professional notification system
function createNotificationSystem() {
    // Create notification container
    const notificationContainer = document.createElement('div');
    notificationContainer.id = 'notification-container';
    notificationContainer.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        transition: all 0.3s ease;
    `;
    document.body.appendChild(notificationContainer);
    
    // Add CSS for notifications
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            padding: 15px 25px;
            margin-bottom: 15px;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            justify-content: space-between;
            animation: slideIn 0.5s forwards;
            max-width: 400px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .notification-error {
            background-color: #fff;
            border-left: 4px solid #e74c3c;
            color: #333;
        }
        
        .notification-success {
            background-color: #fff;
            border-left: 4px solid #2ecc71;
            color: #333;
        }
        
        .notification-info {
            background-color: #fff;
            border-left: 4px solid #3498db;
            color: #333;
        }
        
        .notification-content {
            flex: 1;
        }
        
        .notification-title {
            font-weight: 600;
            margin-bottom: 5px;
            font-size: 16px;
        }
        
        .notification-message {
            font-size: 14px;
        }
        
        .notification-close {
            color: #999;
            cursor: pointer;
            padding: 0 5px;
            font-size: 18px;
            font-weight: bold;
            margin-left: 15px;
        }
        
        .notification-close:hover {
            color: #333;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notificationStyles);
}

// Function to show notifications
function showNotification(title, message, type = 'info', duration = 5000) {
    const container = document.getElementById('notification-container') || 
                     document.body;
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <span class="notification-close">&times;</span>
    `;
    
    container.appendChild(notification);
    
    // Handle close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.5s forwards';
        setTimeout(() => {
            notification.remove();
        }, 500);
    });
    
    // Auto-dismiss after duration
    if (duration > 0) {
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.5s forwards';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }
        }, duration);
    }
    
    return notification;
}

// Initialize the notification system
createNotificationSystem();

// Add styles to make the tags look like the image
const tagStyles = document.createElement('style');
tagStyles.textContent = `
.selected-items {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
}

.selected-tag {
    background-color: rgba(122, 9, 58, 0.15);
    color: #7A093A;
    border-radius: 50px;
    padding: 6px 12px;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    margin-right: 5px;
    margin-bottom: 5px;
}

.remove-tag {
    cursor: pointer;
    font-size: 18px;
    margin-left: 4px;
    line-height: 1;
}

.remove-tag:hover {
    color: #5a072c;
}
`;
document.head.appendChild(tagStyles);
