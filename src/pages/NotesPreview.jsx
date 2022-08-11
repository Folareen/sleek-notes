import React, { Component } from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Container} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default class NotesPreview extends Component {
  render() {
    return (
    <Box >
        <AppBar position="sticky" sx={{color:'info.main', py: 1}} elevation={10}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between'}} >

                <Box sx={{flex: 1, border:1,borderRadius: 10, display:'flex', color: 'info.main', p: 0.8}}>
                    <InputBase
                        sx={{ flex: 1, color:'info.main', px:1}}
                        placeholder="Search Notes with title"
                        inputProps={{ 'aria-label': 'search note' }}
                    />

                    <IconButton type="button" sx={{border: 1, color: 'secondary.main' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>            
                </Box>

                <IconButton sx={{border:1, mr: 0, ml: 2, color:"danger.main"}} >
                    <ExitToAppIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Typography >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eum dolor iste hic sed distinctio similique mollitia. Voluptatum suscipit dicta officiis eius, ipsum saepe nobis perspiciatis accusantium animi esse dolorum nihil numquam neque corporis deserunt facere magnam mollitia libero repellat! Quam debitis et, perspiciatis natus ipsa repudiandae qui est officiis hic repellat architecto accusantium! Tempora commodi blanditiis culpa reprehenderit error obcaecati nihil quaerat ad accusantium qui dolorem accusamus amet, non eligendi tenetur inventore eos quam molestiae perferendis et delectus at. Maiores et veniam eligendi quaerat quod quibusdam ipsa! Magnam perspiciatis veniam fuga, esse sunt odio obcaecati eum. Ratione doloribus error molestiae eius provident aspernatur accusamus nemo rem iusto excepturi. Iste praesentium minus quas minima ipsa sequi, dolorum aliquam molestiae consequuntur dolor, itaque fuga quos soluta maxime fugit, beatae placeat. Ut, beatae necessitatibus. Aliquid dolorem non placeat iure distinctio adipisci aspernatur autem iste rerum cum vero quae, dignissimos provident facilis repellat vitae delectus ut eius quas exercitationem omnis ullam doloribus sequi quibusdam. Pariatur ducimus obcaecati libero omnis commodi fugit rem eligendi reprehenderit, recusandae, odit totam aliquam nobis nam ullam repudiandae ipsum fugiat earum voluptatibus quae distinctio, autem magnam similique! Delectus omnis mollitia earum, quisquam deserunt optio atque recusandae modi corrupti debitis quod, maiores eveniet dignissimos fugit quia illo neque iure facere aliquid. Vero, eveniet alias non esse explicabo enim vel, accusantium, corrupti quidem atque est odio nemo quos a recusandae dolores necessitatibus. In eius nesciunt iusto tempora excepturi repellat sit alias error porro consequatur est, cupiditate recusandae fuga, sed exercitationem dicta corrupti optio voluptatibus. Magni minus aut quas sint et molestias odio sequi voluptate qui laborum cum at in corrupti quo sed maiores, nam omnis velit nulla est eum tenetur cumque. Perspiciatis, nobis provident laboriosam voluptas saepe placeat doloribus nesciunt impedit, maxime, quis ex eaque vero dolorem aspernatur dolores. Molestiae sequi eum voluptate possimus libero minima totam nihil voluptatem sapiente reprehenderit error, aut perspiciatis rem vel accusantium illum, incidunt doloribus repudiandae provident expedita. Ducimus adipisci excepturi alias! Culpa, ab doloremque quae provident tempora laudantium accusamus magnam, asperiores eaque molestiae voluptatem incidunt quidem? Deserunt, id facilis aliquam aspernatur itaque nemo voluptate fugiat sapiente est assumenda, quis nobis obcaecati nostrum libero impedit ipsam vel fugit. Sint tempore quo unde iste reprehenderit ea, perferendis voluptates quos. Voluptatem, iure voluptate quam adipisci magni quae voluptatum sequi, et ipsa, odio rerum cum natus deserunt. Cupiditate quia cumque iste explicabo, aspernatur eum fugit tempore nostrum atque voluptatibus. Repudiandae, aperiam quam cupiditate animi libero necessitatibus. Laudantium qui id eaque distinctio cupiditate at deleniti aperiam repellat consequatur reiciendis a optio alias iusto labore repudiandae saepe aspernatur, illo culpa quisquam porro eligendi commodi consectetur maiores veniam. Harum consequuntur vitae libero a pariatur dolor optio sequi fugiat molestias amet quisquam corporis voluptatibus itaque illo, ducimus laudantium similique nihil excepturi sapiente ratione dolorem possimus. Vitae cupiditate deserunt eos excepturi debitis labore rem eaque reiciendis nam reprehenderit. Ipsa fuga deserunt commodi. Aperiam necessitatibus soluta corrupti esse debitis, mollitia dolorum incidunt veritatis provident aut nam, possimus non? Totam, perferendis. Odio voluptatum, molestiae obcaecati numquam, rem quod dicta vitae minus reiciendis quos dignissimos incidunt expedita impedit ex fuga totam alias iusto quibusdam error, temporibus harum eaque necessitatibus tempore. Consequuntur eius, non consectetur porro ducimus ex saepe minus, expedita excepturi animi dolorem, sit vel quas ratione minima quibusdam assumenda facere cupiditate est aliquid a distinctio hic! Quod exercitationem quam accusamus. Quidem eaque numquam nam perspiciatis pariatur alias. Adipisci odit error excepturi recusandae reprehenderit qui? Quisquam deleniti, vitae consectetur praesentium, voluptatibus, consequuntur explicabo vel cupiditate voluptas eum non sequi? Vero distinctio animi quod iste necessitatibus tenetur, dolore fuga pariatur nostrum similique! Iure, beatae ipsam. Accusamus illum voluptates est in voluptate autem quae quasi laudantium architecto quis fuga magni nostrum dolor corporis, facilis commodi, nobis iure excepturi maiores! Porro dignissimos corrupti, neque sequi officia voluptatibus. Maiores possimus aliquam officia nulla nam nemo laudantium sapiente quod eum placeat reprehenderit dolore saepe sequi minus vitae exercitationem accusamus veritatis ad veniam animi, eaque rem assumenda natus dignissimos. Quaerat autem et, possimus aspernatur numquam quod minima aliquam saepe fugit quos alias nulla atque nesciunt itaque cumque minus nobis cupiditate sequi facere. Hic quibusdam id deserunt molestiae. Minus molestias incidunt ullam amet magni quisquam vitae ad perferendis, alias quia molestiae minima nemo possimus at, repellat, harum maiores perspiciatis libero veritatis debitis non? Ex laborum, aperiam atque dolorem nostrum assumenda deserunt expedita nam! Asperiores eaque hic nihil inventore quas repudiandae qui, dicta non consequuntur sequi nobis cupiditate nesciunt beatae. Provident molestias mollitia eum cupiditate perspiciatis maxime architecto, labore, placeat nisi harum vel. Natus ut omnis nesciunt deleniti, a delectus consequuntur earum repudiandae. Eius at odio ab, error dignissimos sed eligendi asperiores iusto officiis deleniti in ex esse? Repudiandae voluptatum mollitia fuga nesciunt non nihil, quam quidem necessitatibus perferendis! Quidem, magnam corporis fugit aliquid, repellendus omnis repellat magni vel animi modi nulla odio voluptates sequi obcaecati consequatur beatae ratione iste debitis nihil eos possimus neque dolorem. Odio animi fugiat vero at culpa impedit excepturi quis deserunt dolorem nobis quos, saepe perspiciatis quisquam! Adipisci veniam sequi recusandae eos vel. Adipisci inventore quidem expedita nobis, excepturi, saepe minima dolores in iusto, temporibus necessitatibus asperiores voluptatum quis non impedit! Perferendis, placeat laboriosam sequi, nihil veniam, fugiat dignissimos pariatur consequatur quisquam enim distinctio? Ratione consectetur facilis error nobis totam et explicabo, distinctio sapiente eveniet facere quasi minima doloremque sint ab ex voluptas tempore? Ad labore minima error eos consectetur eligendi voluptates voluptas, quidem at deserunt blanditiis expedita mollitia placeat, assumenda et, reiciendis veniam magnam deleniti odit praesentium aspernatur rem maxime corrupti. Modi veritatis sed architecto ullam non nesciunt animi inventore ratione, aspernatur quia nisi, fugiat corrupti tempora quae itaque velit sit reiciendis unde iusto quod a error atque quos harum! Culpa dolores quae rem nostrum repudiandae tempore consequuntur! Nulla aspernatur veniam quos cumque alias, quo quibusdam nobis suscipit aliquid eveniet minima placeat, in accusantium. Fugit corrupti magni amet doloribus, ipsa veniam deserunt maiores mollitia vero eos doloremque atque. Repellendus at minima inventore possimus, provident aperiam neque tempora cumque fuga consequatur veritatis ad voluptatum, vitae a eum deserunt suscipit dignissimos quia eligendi corporis excepturi ex error. Sequi saepe molestiae commodi eius culpa, expedita, similique adipisci, impedit provident consequuntur soluta odit eos numquam officiis ducimus vitae iure corrupti maiores. Amet aspernatur rerum esse sunt repellendus necessitatibus, aut voluptas maxime ducimus commodi quasi voluptatibus dicta id magnam odit debitis quibusdam mollitia, velit ipsum, temporibus laboriosam inventore! Inventore sequi quisquam consequuntur totam doloremque accusantium ad aspernatur consectetur aut qui? Libero itaque a molestias dignissimos debitis dolorum distinctio eius animi, sequi magni suscipit iusto laborum veritatis quaerat minus asperiores obcaecati voluptatum, architecto velit perferendis incidunt totam accusamus molestiae? Nesciunt hic temporibus repellendus excepturi. Ducimus quae animi placeat vero, odit quidem alias atque harum accusantium rerum corporis error pariatur iusto eos aspernatur velit ullam ratione magnam laboriosam dolorem ex tempore. Ipsa veritatis totam architecto aliquid quod eos quia maxime quas rerum cum iure harum eum voluptatum doloremque quibusdam nihil obcaecati consequatur, illum doloribus. Excepturi, voluptas incidunt. Assumenda possimus ipsam cumque corrupti ipsa, iusto impedit officiis saepe nulla cum adipisci molestiae unde reprehenderit inventore fugiat quo incidunt ratione aut sit! Quisquam, libero nobis. Doloremque blanditiis eum qui facilis. Natus eaque delectus itaque explicabo eveniet nisi perferendis dolorum non. Maxime asperiores incidunt dolor, obcaecati earum sit temporibus pariatur corrupti aliquam doloremque nemo ex laboriosam nostrum qui iure, laudantium id porro rerum totam. Hic, obcaecati tempora! Excepturi sit officia sapiente id voluptates molestiae! Repudiandae aliquid deserunt iure. Fugit minima quisquam repellendus mollitia autem, animi quas, iure cupiditate deserunt quo incidunt. Commodi, aliquid animi aut temporibus illum rerum repellendus quidem omnis assumenda dolor accusantium vero aspernatur odio dicta, suscipit, non ipsa modi blanditiis? Deleniti enim quibusdam eveniet ad itaque, tempore, necessitatibus, eligendi facere nostrum voluptate quasi veritatis officia similique odio ex accusantium commodi nemo earum optio dicta. Ex corporis aspernatur quisquam distinctio! Distinctio, saepe aut autem cupiditate iure perspiciatis dignissimos molestias dolor harum, dolorem corporis repellat aliquid magni, tenetur repudiandae. Vel maxime incidunt alias commodi nostrum ad quasi quas doloremque doloribus blanditiis. Totam molestiae cumque hic maxime illo quae ad, eius tempore distinctio quas fugiat inventore, mollitia consequuntur aperiam, expedita natus odit. Unde, incidunt! Officiis expedita repudiandae maiores porro mollitia aut doloribus veniam necessitatibus tempora, non, fugit explicabo nulla eum facilis officia labore? Repellendus repudiandae dignissimos veritatis, quisquam eaque rerum voluptas. Itaque ipsum nemo saepe, reprehenderit hic inventore soluta vel ab veritatis dolores provident molestias commodi esse voluptatum mollitia ad, exercitationem laborum ut sit. Suscipit optio quos, labore nisi autem quisquam eos aut quas mollitia porro minima nesciunt beatae nobis, id voluptas et. Facilis debitis adipisci libero. Dolor quisquam tenetur ipsam sequi nihil odio beatae obcaecati eveniet quae cumque aspernatur facere vitae atque magni dolore sunt esse ratione blanditiis incidunt iusto, inventore sed eaque! Obcaecati, cum quae sit esse iure amet, dolore laudantium dolorum ad aperiam molestias quisquam et explicabo ipsum, soluta quia blanditiis delectus neque at hic corrupti rem qui eius maiores! Modi ipsa explicabo omnis nobis natus laboriosam, nostrum, maxime mollitia harum perferendis consectetur doloremque praesentium possimus, corrupti similique ullam eveniet eum eos repellat? Commodi, harum asperiores iure sed blanditiis possimus ut, eos dolorem temporibus perspiciatis nam in adipisci, exercitationem quibusdam similique magni culpa dignissimos nesciunt? Quis cumque ullam quasi laudantium earum consequuntur sed delectus. Molestias, fugit perspiciatis. Porro numquam odit sit perspiciatis dicta unde voluptatem ullam accusamus at ad, magni reiciendis voluptas ratione dolor tenetur amet maiores eos similique fuga laboriosam ducimus neque. Quo nemo incidunt saepe quos labore. Veritatis, temporibus? Deleniti rem cumque modi ipsam quis quasi facere voluptates dolore nemo quod, recusandae ut nobis voluptatibus possimus incidunt. Inventore soluta nulla rerum quos earum voluptas iste consequuntur explicabo, qui molestias repellat consectetur at natus esse, et labore laudantium dolore repellendus doloribus totam non! Obcaecati quisquam asperiores molestiae in voluptates perferendis magnam dolorem perspiciatis velit suscipit officia nesciunt quae reiciendis, quas ut, deserunt hic accusamus fuga illum delectus dolore voluptatum nam modi? Ducimus dolores, aut fugiat reprehenderit accusantium quas at rem tempora facilis ipsa iure alias officiis deserunt repellat consectetur provident earum cumque beatae. Numquam nostrum suscipit quae inventore, aliquid fuga esse rerum, ex, sit corporis incidunt ipsam odio saepe! Nihil fugit ea aperiam quisquam odio voluptatum? Iure, exercitationem similique iste itaque nobis illum labore ratione a odio sed unde at nostrum, adipisci atque animi. Error expedita odio sunt unde repellendus quidem dolor iure similique tenetur, molestiae quam libero. Assumenda dolorem obcaecati deserunt. Asperiores atque nobis harum aspernatur quaerat quo nostrum quos natus! Incidunt, corrupti! Vero, impedit nobis? Explicabo unde quo earum laudantium mollitia. Explicabo temporibus tempora commodi magni illo blanditiis quidem vel maxime distinctio exercitationem accusantium, quisquam sit excepturi, suscipit impedit dolorem. Sint eveniet, reiciendis cum quae dolores id officia dolorem inventore veniam illo hic dolorum repellat et sunt consequatur minus fuga quo quia facere aliquam natus totam quidem officiis. Repudiandae culpa pariatur illo qui vel, voluptates ad modi eveniet obcaecati nulla hic, est quas sequi. Eius exercitationem labore ipsum expedita tempora temporibus corrupti repellendus necessitatibus, at incidunt sit facere blanditiis optio. Soluta hic temporibus repellendus magnam harum et, officiis sequi corporis recusandae. Voluptatibus incidunt fugiat vitae est nobis unde sapiente, tempora culpa repellat dolorem adipisci molestiae nam rerum minima non velit laborum voluptas earum veniam beatae. Possimus quia voluptas a nam nostrum illum quod? Accusamus eos deserunt ex ratione quia totam deleniti libero quos illum, repellat obcaecati excepturi eaque, reiciendis iusto repudiandae laudantium eius! Soluta, nostrum! Dignissimos voluptatum labore officiis beatae unde autem nesciunt rem exercitationem maiores, quae quisquam voluptate nam veritatis deserunt harum impedit commodi ab dolorum animi est laudantium consequatur. Voluptatem dolores exercitationem consequuntur autem? Corporis perspiciatis voluptatum asperiores dolorem quos, perferendis, expedita magni vitae incidunt rerum saepe odio ab laboriosam omnis totam officiis dignissimos quidem ad maiores laudantium explicabo nulla esse quaerat ipsa. Accusamus assumenda ex voluptatibus neque omnis nemo consectetur tempora mollitia. Eaque magnam asperiores temporibus optio consectetur modi, aliquam, autem sit veritatis tempore doloremque eius fuga? Minima, dolores! Quisquam eveniet accusamus, ratione porro et vero, harum nesciunt error, praesentium est excepturi quae? Nisi molestiae tenetur vitae impedit, unde a reiciendis excepturi necessitatibus iste atque, assumenda quaerat harum sapiente at!
        </Typography>
    </Box>

  );
  }
}





