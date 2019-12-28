<template>
  
<div class="container-fluid p-0   " >

<div class="row " >
    <div class="col">
        <!-- Directory of Persons -->
<div class="nav-tabs bg-light">
    <h6>Անձանց տեղեկատու</h6>
</div>
<!-- Navigation of persons (Անձերի տեղեկատուի նավիգացիա) -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link " id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">--------</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Հիմնական</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Անձիք</a>
  </li>
</ul>


<!-- Content of persons "Անձերի տեղեկատուի կոնտենտ" -->
<div class="row">
<div class="tab-content  " id="myTabContent">
<div class="row"> 
  
<div class="col ml-3">
 
 
 
    <button class="btn btn-outline-info  btn-sm" @click="getDataMethod">Նորացնել</button>
</div>



  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">.
      
      <div class="row">
<div class="col">
  </div>
  </div>
      
      </div>
      <!-- Basic tab "Հիմնական" -->
    
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="row">
<div class="col">
</div></div>




  <!-- Persons Tab (Անձիք)  -->
  <div class="tab-pane fade " id="contact" role="tabpanel" aria-labelledby="contact-tab">

<div class="row ">
  <!-- add button (ավելացնելու կոճակ) -->
<div class="col  ">




  
   <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button class="btn btn-outline-info dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Ավելացնել
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Ֆիզիկական անձ</a>
    <a class="dropdown-item" href="#">Անհատ ձեռնարակատեր</a>
    <a class="dropdown-item" href="#">Կազմակերպություն</a>

  </div>
  <!-- button to change (փոփոխելու կոճակ) -->
  <button type="button" class="btn btn-outline-info btn-sm">Փոփոխել</button>

</div>
</div>



<!-- Remove, Disable, Modify Password button  (Հեռացնել, Կասեցնել,Փոփոխել ծածկագիր) -->
<div class="col">
    
    <div class="btn-group-vertical">

  <button type="button" class="btn btn-outline-info btn-sm">Հեռացնել</button>
  <button type="button" class="btn btn-outline-info btn-sm">Կասեցնել</button>
  <button type="button" class="btn btn-outline-info btn-sm">Փոփոխել ծածկագիր</button>
</div>
                
  
</div>


<!-- Type : deciding field (Որոշիչ,Տեսակ) -->
<div class="col"> 
    <!-- The deciding field (Որոշիչ) -->
    <div class="input-group  input-group-sm ">
   <div class="input-group-prepend ">
    <label class="input-group-text btn-outline-info" for="inputGroupSelect01">Որոշիչ</label>
  </div>
  <select class="custom-select custom-select-sm btn-outline-info" id="inputGroupSelect01">
   <option value="0"></option>
    <option value="1">Բոլորը</option>
    <option value="3">Հաճախորդ</option>
    <option value="2">Աշխատակից</option>
    <option value="3">Վերաապահովագրող</option>
    <option value="4">Վերապ․ բրոքեր</option>
    <option value="5">Ապահովագրական գործակալ</option>
    <option value="6">Մեր ընկերություն</option>
    <option value="7">Գումարն իր հաշվին</option>
    <option value="8">Առանց Online</option>
    <option value="9">միջնորդավճարի հաշվանցում</option>
    <option value="10">Վաճառող</option>
    <option value="11">Ինքը որպես գործակալ</option>
    <option value="12">Աշխատավայր</option>
    <option value="13">Ապահովագրված անձ</option>
    <option value="14">Առավելագույն ապգումարի սահմանում</option>
    <option value="15">Բանկ</option>
    <option value="16">Պատասխանատու անձ</option>
    <option value="17">Միայն փոխանցումով</option>

  </select>
</div>
    <!-- Type field: input  (Տեսակ) -->
    <div class="input-group input-group-sm ">
   <div class="input-group-prepend input-group-sm">
    <label class="input-group-text btn-outline-info" for="inputGroupSelect02">Տեսակ</label>
  </div>
  <select class="custom-select custom-select-sm btn-outline-info" id="inputGroupSelect02">
       <option value="0"></option>

    <option value="1">Անձնագիր</option>
    <option value="2">Նույնականացման քարտ</option>
    <option value="3">Ծննդյան վկայական</option>
    <option value="3">Կացության վկայական</option>
    <option value="3">Օտարերկրյա անձնագիր(Ռդ քաղ․․․)</option>
    <option value="3">Օտարերկրյա անձնագիր</option>
    <option value="3">Հին նույնականացման քարտ</option>
    <option value="3">Մահվան վկայական</option>
    <option value="3">Ճամփորդական փաստաթուղթ</option>

  </select>
</div>
  <!-- Document input (Փաստաթուղթ)  -->
  <div class="input-group input-group-sm">
  
  <input type="text" aria-label="Document name " placeholder="Փաստաթուղթ" class="form-control btn-outline-info ">
      </div>

</div>








<!-- First Name:Last Name:Person code Inputs  Անուն։Ազգանուն։Անձի կոդ դաշտեր-->
<div class="col">
<div class="input-group input-group-sm">
  
  <input type="text" aria-label="Document name" placeholder="Անուն " class="form-control btn-outline-info">
      </div>
<div class="input-group input-group-sm">
  
  <input type="text" aria-label="Document name" placeholder="Ազգանուն" class="form-control btn-outline-info">
      </div>
<div class="input-group input-group-sm">
  
  <input type="text" aria-label="Document name" placeholder="Անձի կոդ" class="form-control btn-outline-info ">
      </div>

</div>
<!-- Internal code, Phone, View phone numbers: (Ներքին կոդ ,Հեռախոս,Դիտել հեռախոսահամարները) -->
<div class="col">

  <!-- Internal code input Ներքին կոդ -->
<div class="input-group input-group-sm">
  
  <input type="text" aria-label="Document name" placeholder="Ներքին կոդ " class="form-control btn-outline-info ">
      </div>

      <!-- Phone  input (Հեռախոս) -->
<div class="input-group input-group-sm">
  
  <input type="text" aria-label="Document name" placeholder="Հեռախոս" class="form-control btn-outline-info">
      </div>


      <!--View phone numbers input (Դիտել հեռախոսահամարները) -->
<div class="input-group input-group-sm">
  
  <input class="btn btn-outline-info btn-sm" type="button" value="Դիտել հեռախոսահամարները  ">

      </div>

</div>


<div class="col">
     <!-- BM request (ԲՄ հարցում) -->
    <div class="input-group input-group-sm ">
   <div class="input-group-prepend input-group-sm">
    <label class="input-group-text btn-outline-info" for="inputGroupSelect02">ԲՄ հարցում</label>
  </div>
  <select class="custom-select custom-select-sm btn-outline-info" id="inputGroupSelect02">
       <option value="0"></option>

    <option value="1">Ապահովադրի</option>
    <option value="2">Վարորդի (BM01)</option>
    
  </select>
</div>

<!-- BM double query (ԲՄ հարցում) -->
 <div class="input-group input-group-sm ">
   <div class="input-group-prepend input-group-sm">
    <label class="input-group-text btn-outline-info" for="inputGroupSelect02">ԲՄ հարցում</label>
  </div>
  <select class="custom-select custom-select-sm btn-outline-info" id="inputGroupSelect02">
       <option value="0"></option>

    <option value="1">Ապահովադրի</option>
    <option value="2">Վարորդի (BM01)</option>
    
  </select>
</div>
</div>




</div>







  </div>
</div>
</div>
</div>
    </div>
    
</div>


<!-- Table -->

<div class="row table-responsive  mt-1 ">

    <div class="col">
    <table class="table table-bordered  table-sm table-hover text-black text-monospace text-nowrap ">
      <thead class=" bg-light ">
                    <tr>
                        <th>Կոդ</th>

                        <th>Ներքին համար </th>
                        <th>Տիպ</th>
                        <th>Ռեզիդենտ է</th>
                        <th>Անուն/Անվանում</th>
                        <th>Ազգանուն</th>
                        <th>Հայրանուն</th>
                        <th>Կազմակերպաիրավական տեսակ </th>
                        <th>Պետության մասնաբաժինը</th>
                        <th>Կազմակերպության անվանումը</th>
                        <th>Սեռ</th>
                        <th>Ծննդյան տարեթիվ</th>
                        <th>Մահվան ամսաթիվ</th>
                        <th>Երկքաղաքացիություն</th>
                        <th>Հաշվառման երկիր</th>
                        <th>ՀԾՀՀ</th>
                        <th>Փաստաթղթի տեսակ</th>
                        <th>Փաստաթղթի համար</th>
                        <th>Ում կողմից է տրված</th>
                        <th>Տրման ամսաթիվ</th>
                        <th>Վավեր է մինչև</th>
                        <th>Նույնականացման համար</th>
                        <th>Ում կողմից է տրվել</th>
                        <th>Տրման ամսաթիվ</th>
                        <th>Վավեր է մինչև</th>
                        <th>Վարորդական վկայական</th>
                        <th>Վարորդական վկայականի ժամկետ</th>
                        <th>ՀՎՀՀ</th>
                        <th>Պետական ռեգիստրի գրանցման համար</th>
                        <th>Տնտեսության հատված</th>
                        <th>Հուսալի է</th>
                        <th>Հասցե</th>
                        <th>Էլեկտրոնային հասցե</th>
                        <th>Անուն/Անվանում(անգլերեն)</th>
                        <th>Անուն/Անվանում(ռուսերեն)</th>
                        <th>Ծննդավայր</th>
                        <th>Աշխատավայր</th>
                        <th>Տնօրենի ԱԱՀ</th>
                        <th>Մասնաճյուղ</th>
                        <th>Լրացման ճշտություն</th>
                        <th>մուտքագրող</th>
                        <th>Մուտքագրման ամսաթիվ</th>
                        <th>Փակման ամսաթիվ</th>
                        <th>Փոփոխող</th>
                        <th>Փոփոխում</th>
                        <th>Գործակալ</th>
                        <th>Գործակալի հաշվառման ամսաթիվ</th>
                        <th>Գործակալի հաշվառման համար</th>
                        <th>Աշխատանքային պայմանագրի համար</th>
                        <th>Աշխատանքային պայմանագրի սկիզբ</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="myGetData in getData.data" v-bind:key="myGetData.id">
                        <td>{{myGetData.CUSTOMER}}</td>
                        <td>{{myGetData.EXTNUM}}</td>
                        <td>{{myGetData.PERSON}}</td>
                        <td>{{myGetData.RESIDENCE}}</td>


                        <td>{{myGetData.NAME_A}}</td>
                        <td>{{myGetData.SNAME_A}}</td>
                        <td>{{myGetData.FNAME_A}}</td>
                        <td>{{myGetData.ORGTYPE}}</td>

                        <td>{{myGetData.PRATE}}</td>
                        <td>{{myGetData.ORGNAME}}</td>
                        <td>{{myGetData.SEX}}</td>

                        <td>{{myGetData.BIRTHDAY}}</td>
                        <td>{{myGetData.DEDTIME}}</td>
                        <td>{{myGetData.ISTWOCTRY}}</td>
                        <td>{{myGetData.COUNTRY}}</td>
                        <td>{{myGetData.SOCCART}}</td>
                        <td>{{myGetData.DOCKIND}}</td>
                        <td>{{myGetData.DOCUMENT}}</td>
                        <td>{{myGetData.DOCSRC}}</td>
                        <td>{{myGetData.DOCDATE}}</td>
                        <td>{{myGetData.DOCISSUDT}}</td>
                        <td>{{myGetData.IDCARD}}</td>
                        <td>{{myGetData.IDSRC}}</td>
                        <td>{{myGetData.IDISSUDT}}</td>
                        <td>{{myGetData.IDEXPIRDT}}</td>
                        <td>{{myGetData.TAXPAYER}}</td>
                        <td>{{myGetData.REGNUM}}</td>
                        <td>{{myGetData.SECTOR}}</td>
                        <td>{{myGetData.TRUSTED}}</td>
                        <td>{{myGetData.ADDRESS_A}}</td>
                        <td>{{myGetData.EMAIL}}</td>
                        <td>{{myGetData.FULLNAME_E}}</td>
                        <td>{{myGetData.FULLNAME_R}}</td>
                        <td>{{myGetData.BIRTHPLACE}}</td>
                        <td>{{myGetData.WORKPLACE}}</td>
                        <td>{{myGetData.WORKER}}</td>
                        <td>{{myGetData.BRANCH}}</td>
                        <td>{{myGetData.FULLKIND}}</td>
                        <td>{{myGetData.TSOWNER}}</td>
                        <td>{{myGetData.OPENDATE}}</td>
                        <td>{{myGetData.CLOSEDATE}}</td>
                        <td>{{myGetData.TSUSER}}</td>
                        <td>{{myGetData.TSTIME}}</td>
                        <td>{{myGetData.BROKER}}</td>
                        <td>{{myGetData.LICENCEDATE}}</td>
                        <td>{{myGetData.LICENCENUM}}</td>
                        <td>{{myGetData.CONTNUM}}</td>
                        <td>{{myGetData.CONTDATE}}</td>





                    </tr>


                </tbody>

</table>
    </div>
</div>












</div>



</template>















<script>



export default {
name:'directoryPersons',
data(){
  return{
     getData: [],
        url: {

            getData: 'http://192.168.100.153:8000/customer/customer-cur'

        }
  }
},
 methods: {

        getDataMethod() {
this.$http.get(this.url.getData).then(responce => {
              // console.log(responce.data);
            this.getData = responce.data;
            })


            // axios.get(this.url.getData).then((responce) => {
            //     console.log(responce.data);
            //     this.getData = responce.data;
            // });
        }
    }









}
</script>

<style >

</style>