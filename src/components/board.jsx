import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {toggleTodoAction, deleteTodoAction} from '../store/todoReducer'

const TodoList = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const toggleTodo = todoId => dispatch(toggleTodoAction(todoId))
    const deleteTodo = todoId => dispatch(deleteTodoAction(todoId))

    return <>
    <link rel='stylesheet' href='https://d2n6ofw4o746cn.cloudfront.net/masthead/dailytelegraph/bushfire%20support/bootstrap.min.css'>
<link rel="stylesheet" href="https://d2n6ofw4o746cn.cloudfront.net/masthead/dailytelegraph/bushfire%20support/style.css">
<div class="header"><h2>How you can help: Charities</h2></div>
<div class="table_container">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Charity/campaign name</th>
        <th>Charity type</th>
        <th>Registered</th>
      </tr>
    </thead>
    <tbody>
                 
<tr>
            <td>Southern Koala Rescue &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Donations for medical care for rescued koalas affected by the fires, heat, dehydration, starvation or habitat loss </li>
                <li><strong>Target:</strong> $20,000  </li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/southern-koala-rescue-official-fundraiser"> https://www.gofundme.com/f/southern-koala-rescue-official-fundraiser</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>South Australian fire victims &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Raising funds to help Raymond, 69, and Barbara Offe, 72, after their property was destroyed in a devastating bushfire at Mount Torrens on December 20. Barbara has Parkinsons disease.</li>
                <li><strong>Target: </strong>$5,000</li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/south-australian-local-fire-victim-needs-your-help"> https://www.gofundme.com/f/south-australian-local-fire-victim-needs-your-help</a></li>
              </ul></td> 
            <td>Private</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Adelaide small business bushfire relief effort &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>KX Pilates South Australia and five other business are organising this fundraiser in aid of Australian Red Cross</li>
                <li><strong>Target: </strong> $50,000 </li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/kx-pilates-sa--bushfire-relief-effort">https://www.gofundme.com/f/kx-pilates-sa--bushfire-relief-effort </a></li>
              </ul></td> 
            <td>Private|Business</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Hindu Society South Australia Bushfire Fundraiser &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Money raised will go to the KI Mayoral Relief and Recovery Bushfire Fund</li>
                <li><strong>Target: </strong>$1,000</li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/hindu-society-of-south-australia-fundraiser">https://www.gofundme.com/f/hindu-society-of-south-australia-fundraiser</a></li>
              </ul></td> 
            <td>Wildlife | Business | Private</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>SA Apiarist Association KI Beekeepers Bushfire Relief &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong> KI's unique ligurian honeybees have lost most of their habitats during the bushfires. This fundraiser aims to support all of the island's beekeepers </li>
                <li><strong>Target: </strong>$50,000</li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/honeybee-industry-managed-ki-bushfire-relief">https://www.gofundme.com/f/honeybee-industry-managed-ki-bushfire-relief</a></li>
              </ul></td> 
            <td>Business</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Robin's Roses Bushfire Quilts &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong> Making quilts for the people affected by the bushfires across Australia</li>
                <li><strong>Target: </strong>$2,000</li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/robin039s-roses-bushfire-quilts">https://www.gofundme.com/f/robin039s-roses-bushfire-quilts</a></li>
              </ul></td> 
            <td>Private</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Funds for the Kangaroo Island Wildlife Park &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>UK boys Beau and Jared are selling cake and raising money for the Kangaroo Island Wildlife Park</li>
                <li><strong>Target: </strong>$95</li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/kangaroo-island-wildlife-park">https://www.gofundme.com/f/kangaroo-island-wildlife-park</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Bushfire Habitat Replacement &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong> For water and food for the animals that have survived the KI fires and also assist with the long term rebuilding of the environment</li>
                <li><strong>Target: </strong>$25,000</li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/bush-fire-habitat-replacment">https://www.gofundme.com/f/bush-fire-habitat-replacment</a></li>
              </ul></td> 
            <td>Wildlife | Environment</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Adelaide & Hills Koala Rescue SA 1300Koalaz Inc &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Donations have been reserved for treatment, and short term and long term care of koalas</li>
                <li><strong>Target: </strong>$350,000  </li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/sa-koala-burn-victims"> https://www.gofundme.com/f/sa-koala-burn-victims</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>Adelaide Flying Fox Support Fund &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Donations go towards a creche aviary, fruits, powered fridges, electricity and water bills to care for Adelaide's flying foxes </li>
                <li><strong>Target: </strong>$25,000  </li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/adelaide-flying-fox-support-fund"> https://www.gofundme.com/f/adelaide-flying-fox-support-fund</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Red Cross Disaster Relief and Recovery Fund &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong> To help communities prepare, respond and recover at times of a disaster</li>
                <li><strong>Target: </strong>N/A  </li>
                <li><strong>Donate: </strong><a href="https://fundraise.redcross.org.au/drr">https://fundraise.redcross.org.au/drr</a></li>
              </ul></td> 
            <td>Various</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>Salvation Army &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong> All funds donated during disaster appeals are used to support the affected communities.</li>
                <li><strong>Target: </strong>N/A  </li>
                <li><strong>Donate: </strong><a href="https://www.salvationarmy.org.au/donate/make-a-donation/donate-online/?appeal=disasterappeal">https://www.salvationarmy.org.au/donate/make-a-donation/donate-online/?appeal=disasterappeal </a></li>
              </ul></td> 
            <td>Various</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>Kangaroo Island Mayoral Relief and Recovery Bushfire Fund &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong> Hundred percent of all money in the fund will be going directly to people whose homes, properties or businesses have been impacted by the Kangaroo Island bushfires.</li>
                <li><strong>Target: </strong>$10,000  </li>
                <li><strong>Donate: </strong><a href="https://www.kangarooisland.sa.gov.au/notice-board/latest-news/ki-mayoral-relief-and-recovery-bushfire-fund?fbclid=IwAR043DMjmKtaVAaf9WMlR0BX6KQuUm1Wr-6mQms0agTO7ZK7F2WH1WTIZ8k"> https://www.kangarooisland.sa.gov.au/</a></li>
              </ul></td> 
            <td>Private | Business</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Clara's Hair for Koala Care &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Eight-year-old Clara is cutting off her long hair to raise money for Adelaide Koala Rescue </li>
                <li><strong>Target: </strong> $722 </li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/clara039s-hair-for-koala-care">https://www.gofundme.com/f/clara039s-hair-for-koala-care</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Adelaide Koala Rescue &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>To help bushfire-affected koalas </li>
                <li><strong>Target: </strong> $100,000 </li>
                <li><strong>Donate: </strong><a href="https://www.akr.org.au/">https://www.akr.org.au/</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>Nature Foundation's Wildlife Recovery Fund &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Aims to reestablish habitat for threatened an vulnerable species in SA's bushfire affected landscape </li>
                <li><strong>Target: </strong>N/A</li>
                <li><strong>Donate: </strong><a href="https://www.naturefoundation.org.au/support-us/wildlife-recovery-fund?fbclid=IwAR0L4D9tsifMXbVJ1Ae6R9z_Tjl2ji-5QBrwXThz_G9KE46G3NShiXqaX_0">https://www.naturefoundation.org.au/support-us/wildlife-recovery-fund?fbclid=IwAR0L4D9tsifMXbVJ1Ae6R9z_Tjl2ji-5QBrwXThz_G9KE46G3NShiXqaX_0</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>SA Bushfire Appeal &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>The South Australian government has launched the SA Bushfire Appeal to raise funds for people directly affected by bushfires in Cudlee Creek and on Kangaroo Island. </li>
                <li><strong>Target: </strong>N/A  </li>
                <li><strong>Donate: </strong><a href="https://www.sa.gov.au/topics/emergencies-and-safety/bushfire-appeal">https://www.sa.gov.au/topics/emergencies-and-safety/bushfire-appeal</a></li>
              </ul></td> 
            <td>Private | Business</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Minton Farm Animal Rescue Centre &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>We are constantly on the lookout for food, medical equipment and general supplies </li>
                <li><strong>Target: </strong>N/A  </li>
                <li><strong>Donate: </strong><a href="http://www.mintonfarm.org/donate-food-and-supplies.html">http://www.mintonfarm.org/donate-food-and-supplies.html</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>Country Fire Service Foundation &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>To support CFS volunteer firefighters </li>
                <li><strong>Target: </strong>N/A  </li>
                <li><strong>Donate: </strong><a href="https://cfsfoundation.org.au/donate">https://cfsfoundation.org.au/donate</a></li>
              </ul></td> 
            <td>Firefighters</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>Human Society International Animal Rescue Fund &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>To employ staff to KI to set up water stations and rescue injured animals </li>
                <li><strong>Target: </strong>  </li>
                <li><strong>Donate: </strong><a href="https://donate.hsi.org/page/36521/donate/1?locale=en-AU&utm_campaign=artm-ausfire-20&utm_source=facebook&utm_medium=paid&ea.tracking.id=BL20-artm-ausfire-20-facebook-paid-PRSP-LLR_topgeos&fbclid=IwAR2OsxE5ApYaYGQlDccJ5RsONQA7ABX-l1vh8tIoE6JAk7xNZky1kjp80cU">https://donate.hsi.org/page/36521/donate/1</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>WWF Bushfire Emergency &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>To care for injured wildlife and restore their homes in Australia </li>
                <li><strong>Target: </strong>N/A</li>
                <li><strong>Donate: </strong><a href="https://donate.wwf.org.au/donate/koala-crisis/koala-crisis?t=AP0120O01&f=41120-213&gclid=EAIaIQobChMI0_iXo_iT5wIVVBqPCh2ZFgV2EAAYASAAEgJACvD_BwE#gs.trvbdo">https://donate.wwf.org.au/donate/koala-crisis/koala-crisis?t=AP0120O01&f=41120-213&gclid=EAIaIQobChMI0_iXo_iT5wIVVBqPCh2ZFgV2EAAYASAAEgJACvD_BwE#gs.trvbdo</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>Kangaroo Island Wildlife Park &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Donations for veterinary costs, koala milk and supplements, extra holding/rehabilitation enclosures, as well as setting up a building to hold supplies to treat these animals.</li>
                <li><strong>Target: </strong>$15,000</li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/help-save-kangaroo-islands-koalas-and-wildlife">https://www.gofundme.com/f/help-save-kangaroo-islands-koalas-and-wildlife</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Wildlife Recovery Fund &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Funds go to Nature Foundation SA  </li>
                <li><strong>Target: </strong>$100,000  </li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/wildlife-recovery-fund">https://www.gofundme.com/f/wildlife-recovery-fund</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>Save Lolly the cat &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Funds go to Lolly the cat's vet bills, who went missing during the Cudlee Creek fires and was severly burned</li>
                <li><strong>Target: </strong> $3,000</li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/please-help-lolly">https://www.gofundme.com/f/please-help-lolly</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>No</td> 
          </tr> 
<tr>
            <td>SA Bushfire Victims  &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Money donated to SAVEM for animal recovery </li>
                <li><strong>Target: </strong> $2,000</li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/sa-wildlife-bushfire-victims">https://www.gofundme.com/f/sa-wildlife-bushfire-victims</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Bushfire relief for Kangaroo Island &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>SA businesses rally together to raise money for the KI Mayoral Relief Fund and the KI Wildlife park fund </li>
                <li><strong>Target: </strong>$5,000</li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/bushfire-relief-raffle">https://www.gofundme.com/f/bushfire-relief-raffle</a></li>
              </ul></td> 
            <td>Various</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Cave Landscape Bushfire Rehabilitation Appeal  &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Money will go to the Australian Speleological Federation to help restore caves impacted in KI, Kelly Hll Caves reserve, and in Flinders Chase. </li>
                <li><strong>Target: </strong>$20,000 </li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/cave-landscape-bushfire-rehabilitation-appeal">https://www.gofundme.com/f/cave-landscape-bushfire-rehabilitation-appeal</a></li>
              </ul></td> 
            <td>Environment</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Victims of Bushfires KI  &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Money raised will go to homes lost on KI </li>
                <li><strong>Target: </strong> $10,000</li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/victims-of-bushfires-kangaroo-island-sth-aust">https://www.gofundme.com/f/victims-of-bushfires-kangaroo-island-sth-aust</a></li>
              </ul></td> 
            <td>Private</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Walk of Fire &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>George Mamalis is walking from Victoria Square to Cape Jervis to raise funds for three charities - CFS, RSPCA and the Mayoral Relief </li>
                <li><strong>Target: </strong>N/A  </li>
                <li><strong>Donate: </strong><a href="https://www.gofundme.com/f/walkoffire?utm_medium=copy_link&utm_source=customer&utm_campaign=p_na+share-sheet&rcid=e5aca827d84346a6bd3f44312d059e6d&fbclid=IwAR0yr49FHgK6MgqCi23NY1jXFJ0q29TYEK5u0EQFCpFpmFjVX9AUuLGxLeo">https://www.gofundme.com/f/walkoffire?utm_medium=copy_link&utm_source=customer&utm_campaign=p_na+share-sheet&rcid=e5aca827d84346a6bd3f44312d059e6d&fbclid=IwAR0yr49FHgK6MgqCi23NY1jXFJ0q29TYEK5u0EQFCpFpmFjVX9AUuLGxLeo</a></li>
              </ul></td> 
            <td>Various</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Blaze Aid &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Volunteers help to rebuild fences and other structures that have been damaged or destroyed</li>
                <li><strong>Target: </strong>N/A  </li>
                <li><strong>Donate: </strong><a href="https://blazeaid.com.au/">https://blazeaid.com.au/</a></li>
              </ul></td> 
            <td>Rebuild</td> 
            <td>No</td> 
          </tr>
<tr>
            <td>Vinnies SA Bushfire Appeal &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>100% of your generous donation will be directed to locals affected and will help them to renew, rebuild and restore</li>
                <li><strong>Target: </strong>N/A</li>
                <li><strong>Donate: </strong><a href="https://www.vinnies.org.au/page/Donate/Vinnies_Current_Appeals/Vinnies_SA_Bushfire_Appeal_-_December_2019/">https://www.vinnies.org.au/page/Donate/Vinnies_Current_Appeals/Vinnies_SA_Bushfire_Appeal_-_December_2019/</a></li>
              </ul></td> 
            <td>Private | Business</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>Kangaroo Island Wildlife Network &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Our aim is to provide carers with the guidance, knowledge and experience to rescue, raise and rehabilitate our injured, sick and orphaned wildlife</li>
                <li><strong>Target: </strong>N/A</li>
                <li><strong>Donate: </strong><a href="https://kiwildlifenetwork.wixsite.com/kiwn/about-us">https://kiwildlifenetwork.wixsite.com/kiwn/about-us</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>Yes</td> 
          </tr>
<tr>
            <td>RSPCA SA Bushfire Appeal &nbsp&nbsp
            <button class="btn btn-info show-details">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button><ul class="details">
              <li><strong>Description: </strong>Rescue and treat wildlife affected by the bushfires</li>
                <li><strong>Target: </strong>$400,000</li>
                <li><strong>Donate: </strong><a href="https://my.rspcasa.org.au/bushfires/Donate">https://my.rspcasa.org.au/bushfires/Donate</a></li>
              </ul></td> 
            <td>Wildlife</td> 
            <td>Yes</td> 
          </tr>
      

    </tbody>
  </table>
</div>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script><script  src="https://d2n6ofw4o746cn.cloudfront.net/masthead/dailytelegraph/bushfire%20support/script.js"></script>



    
    </>
}

export default TodoList