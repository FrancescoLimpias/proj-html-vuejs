/* Contents Store / Builder
 * (made to lighten html structure & improve readability)
*/

// contents store
export let contents = {
    /* template
     * (sort of documentation of contents store structure)
     *

    strenghts: [
        {
            title,
            text,
            path,
        }, ...
    ],

    testimonials: [
        {
            capture,
            description,
            author,
            job,
            path,
        }, ...
    ]

     */
};

// ContentType constructor
/* name - name of content (e.g: CardReviewContent, OnlineCourseCardContent...)
 * keys - keys that content object will hold (e.g: name, title, text...)
 * return - a function that allows you to bulk add contents, in a ordered and clean way
 */
function createContentType(name, ...keys) {

    // Create content slot
    contents[name] = [];

    // Create and return build function
    return (...paramsArrays) => {

        // Iterate between all arrays of parameters given as "paramsArrays"
        paramsArrays.forEach((paramsArray) => {

            // create single content object
            const content = {};

            // fill with given data
            keys.forEach((key, index) => {
                content[key] = paramsArray[index];
            });

            // add content object to its contents(store).section
            contents[name].push(content);
        })
    };
}

// Strength Cards
createContentType("strengths", "title", "text", "path") /* (content type declaration) */
    //Content Type "fill" (bulk add operation)
    (
        [
            "Online Courses",
            "Online art coaching now offers you a very powerful way to redesign your artist mind.",
            undefined
        ],
        [
            "One to One",
            "Getting the necessary clarity about the current state to help you improve your ability.",
            undefined
        ],
        [
            "Anywhere",
            "Access to valuable and portable program which allow you to setup and live anywhere you want.",
            undefined
        ],
        [
            "On Time",
            "Punctuality is our top priority because it's an essential criteria to assess a program quality.",
            undefined,
        ]
    );

// Testimonials Cards
createContentType("testimonials", "capture", "description", "author", "job", "path")
    (
        [
            "High level of efficiency and scientific teaching methods",
            "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
            "Mina Hollace",
            "Freelancer",
            undefined,
        ],
        [
            "Professional team of specialists and passionate mentors at reach",
            "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
            "Madley Pondor",
            "IT Specialist",
        ],
        [
            "It's a choice of quality for people with special needs",
            "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
            "Florence Themes",
            "Multimedia Admin",
            undefined,
        ],
    );

// Courses
createContentType("courses", "path", "price", "title", "lessons", "capacity")
    (
        [
            undefined,
            18,
            "The Acrylic Painting Academy",
            4, 50,
        ],
        [
            undefined,
            21,
            "Drawing and Shading: Complete Course",
            14, 50,
        ],
        [
            undefined,
            19,
            "The Color Theory for Digital Artist",
            7, 50,
        ],
        [
            undefined,
            35,
            "Ultimate Guide to Digital Sketching for Beginner",
            14, 50,
        ],
        [
            undefined,
            19,
            "Portrait Drawing The Smart Way",
            2, 50,
        ],
        [
            undefined,
            19,
            "Mastering Watercolor Painting from Beginner",
            9, 50,
        ],
        [
            undefined,
            25,
            "The Art & Science of Drawing",
            4, 50,
        ],
        [
            undefined,
            22,
            "The Colored Pencil Drawing Course",
            6, 50,
        ]
    );