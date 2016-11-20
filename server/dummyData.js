import Post from './models/post';

import {
    User,
    Dahakni
} from './models';


export default function() {

    User.count().exec((err, count) => {
        if (count > 0) {
            return;
        }

        const user = new User({
            fname: 'omar',
            lname: 'BERRABEH',
            email: 'omar.berrabeh@gmail.com',
            status: 'accepted'
        });

        User.create(user, (error) => {
            if (!error) {
                console.log('ready to go....');
            } else {
                console.warn('error:', error);
            }
        });
    });


    Dahakni.count().exec((err, count) => {
        if (count > 0) {
            return;
        }

        const dahakniContent1 = `Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum`;



        const dahakniContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum. Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet.`;

        User
            .findOne({
                email: 'omar.berrabeh@gmail.com'
            })
            .exec((err, user) => {
                if (!err) {
                    const dahakni = new Dahakni({
                        _owner: user,
                        cuid: 'cikqgkv4q01ck7453ualdn3hd',
                        content: dahakniContent1,
                        status: 'view'
                    });

                    Dahakni.create([dahakni], (error) => {
                        if (!error) {
                            console.log('success added dahakni');
                        } else {
                            console.warn('error added dahakni', error);
                        }
                    });

                }
            });


    });

}