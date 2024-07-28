
## wcb google site - API references



### 1. Base Url `/activities`
    please replace  ":subfield_name" with 
            -training_and_workshop
            -awareness
            -rescue

#### 1.1 create 
    `/:subfield_name/create`
#### 1.2 to get all
     /:subfield_name/getall
#### 1.3 to get by id
    /:subfield_name/:id
#### 1.4 to update by id
    /:subfield_name/update/:id
#### 1.5 to update by id
    /:subfield_name/delete/:id


### 2. Base url `/research`
    please replace  ":subfield_name" with 
            -research_projects
            -phd
            -m_phill
            -masters

#### 2.1 create 
    `/:subfield_name/create`
#### 2.2 to get all
    `/:subfield_name/getall`
#### 2.3 to get by id
    /:subfield_name/get/:id
#### 2.4 to update by id
    /update/:id
#### 2.5 to update by id
    /delete/:id


### 3. current scholars  base url `/current_scholars`

#### 3.1 create 
    `/create`
#### 3.2 to get all
    `/all`
#### 3.3 to get by id
    `/get/:id`
#### 3.4 to update by id
    /update/:id
#### 3.5 to update by id
    /delete/:id


### 4. master students Base url `/master_students`

#### 4.1 create 
    `/create`
#### 4.2 to get all
    `/all`
#### 4.3 to get by id
    `/get/:id`
#### 4.4 to update by id
    /update/:id
#### 4.5 to update by id
    /delete/:id


### 5. collaborators
  - we have not integrated the updatefunction in it because all of them are images , so can directly be deleted , not updated
#### 5.1 create 
    `/create`
#### 5.2 to get all
    `/getall`
#### 5.3 to get by id
    `/get/:id`
#### 5.4 to update by id
    /delete/:id

### 6. publications

#### 4.1 create 
    `/create`
#### 4.2 to get all
    `/getall`
#### 4.3 to get by id
    `/get/:id`
#### 4.4 to update by id
    /update/:id
#### 4.5 to update by id
    /delete/:id