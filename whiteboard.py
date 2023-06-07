"""
How To Whiteboard
1. Read the problem out loud
2. Making any assumption, ask claryinging questions. (you are establishing good habits)
3. coming up with the approach (drawing pictures) (make sure you dont leave us the viewers in the dust)
	- ideally, you can come up with a COUPLE solutions, evaluate their complexities/efficiency/then make your pick
4. Write out the code (this should actually take a small aount of time)
5. Debug / re-evaluate

"""


# Write a function that takes in a string of one or more words,
#  and returns the same string,
# but with all five or more letter words reversed.
#  Strings passed in will consist of only letters and spaces.
#  Spaces will be included only when more than one word is present.


#code plan:

# take in a string (sentence)

# use split to split up the word

# look at each word to check length > 5

# if true, reverse it

# return the string



def reverse_bigs(aString):
    new_list = []

    split_words = aString.split()

    for word in split_words:
        if len(word) >= 5:
            new_list.append(word[::-1])

    return ' '.join(new_list)


print(reverse_bigs())




















"""


from unittest import TestCase, main

from whiteboard import solution

class MatchTestCase2(TestCase):
    def test_multi_word(self):
        self.assertEqual(solution( "Hey fellow warriors" ),"Hey wollef sroirraw" )
    def test_multi_word_2(self):
         self.assertEqual(solution("This sentence is a sentence"), "This ecnetnes is a ecnetnes")
    def test_single(self):
        self.assertEqual(solution("Stodder"),"reddotS")
    def test_single_2(self):
        self.assertEqual(solution("CodeWars"), "sraWedoC")


"""