import { PLACE } from "../domain/constants";
import { MESSAGE } from "../domain/message";
import { getAscendingSortedNumbers } from "../utils";

export const view = {
  $purchaseAmountMessageSpan: document.getElementById("message-purchaseAmount"),
  $lottos: document.getElementById("lottos"),
  $placeNumbers: document.querySelectorAll(".place-number"),
  $rateOfReturn: document.getElementById("rate-of-return"),

  // rendering
  printNumberOfPurchasedLottos(numberOfPurchasedLottos) {
    this.$purchaseAmountMessageSpan.textContent =
      MESSAGE.OUTPUT.numberOfPurchasedMessage(numberOfPurchasedLottos);
  },

  printLottos(lottos) {
    const lottoTags = lottos
      .map(
        (lotto) =>
          `<div class="lotto">
      <span class="emoji-lotto">🎟️</span
      ><span class="lottoNumber">${getAscendingSortedNumbers(lotto.numbers).join(", ")}</span>
    </div>`
      )
      .join("");
    this.$lottos.innerHTML = lottoTags;
  },

  printPlacesOfLottos(placesOfLottos) {
    const keys = [PLACE.fifth, PLACE.fourth, PLACE.third, PLACE.second, PLACE.first];
    this.$placeNumbers.forEach(
      (place, index) => (place.textContent = `${placesOfLottos[keys[index]]}개`)
    );
  },

  printRateOfReturn(rateOfReturn) {
    this.$rateOfReturn.textContent = MESSAGE.OUTPUT.rateOfReturnMessage(
      rateOfReturn.toLocaleString()
    );
  },
};
