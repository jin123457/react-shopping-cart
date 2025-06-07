import * as S from "./OrderConfirmPage.styled";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";
import useCart from "../../hooks/useCart";
import LoadingSpinner from "../../components/icons/LoadingSpinner";
import OrderCardList from "./components/OrderCardList";
import PaymentPriceList from "./components/PaymentPriceList";
import { useNavigate } from "react-router";
import CheckBox from "../../components/common/CheckBox";
import { useState } from "react";
import { Modal } from "@seo_dev/react-modal";
import GuideSign from "../../components/icons/GuideSign";

const OrderConfirmPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, cartItemsInfo, cartItemListProps, orderResult } = useCart();

  const navigate = useNavigate();
  const handleNavigate = () => navigate("/payment-success", { state: orderResult });
  return (
    <S.Container>
      <Text variant="title-1">주문 확인</Text>
      <S.Information>
        <Text variant="body-3">현재 {cartItemsInfo.cartItemsCount}종류의 상품이 담겨있습니다.</Text>
        <OrderCardList cartItemListProps={cartItemListProps} />
        <Button variant="secondary" size="full" onClick={() => setIsOpen((prev) => !prev)}>
          쿠폰 적용
        </Button>
        <S.DeliveryInformation>
          <Text variant="title-2">배송 정보</Text>
          <CheckBox isChecked={false} onClick={() => setIsOpen((prev) => !prev)}>
            제주도 및 도서 산간 지역
          </CheckBox>
        </S.DeliveryInformation>
        <PaymentPriceList cartItemsInfo={cartItemsInfo} />
      </S.Information>
      <S.ButtonWrap>
        <Button variant="primary" onClick={handleNavigate}>
          결제하기
        </Button>
      </S.ButtonWrap>
      {isLoading && <LoadingSpinner />}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <Modal.BackDrop />
          <Modal.Content
            style={{ padding: "24px 32px", gap: "32px", display: "flex", flexDirection: "column", borderRadius: "8px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Modal.Title>
                <Text variant="title-1">쿠폰을 선택해 주세요</Text>
              </Modal.Title>
              <Modal.CloseButton>X</Modal.CloseButton>
            </div>
            <div>
              <div>
                <GuideSign />
                <Text variant="body-2">쿠폰은 최대 2개까지 사용할 수 있습니다.</Text>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    borderTop: "1px solid #E0E0E0",
                    paddingTop: "16px",
                  }}
                >
                  <div>
                    <CheckBox isChecked={false} onClick={() => {}}>
                      <Text variant="title-2">5,000원 할인 쿠폰</Text>
                    </CheckBox>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <Text variant="body-2">만료일: 2024년 11월 30일</Text>
                    <Text variant="body-2">만료일: 2024년 11월 30일</Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    borderTop: "1px solid #E0E0E0",
                    paddingTop: "16px",
                  }}
                >
                  <div>
                    <CheckBox isChecked={false} onClick={() => {}}>
                      <Text variant="title-2">5,000원 할인 쿠폰</Text>
                    </CheckBox>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <Text variant="body-2">만료일: 2024년 11월 30일</Text>
                    <Text variant="body-2">만료일: 2024년 11월 30일</Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    borderTop: "1px solid #E0E0E0",
                    paddingTop: "16px",
                  }}
                >
                  <div>
                    <CheckBox isChecked={false} onClick={() => {}}>
                      <Text variant="title-2">5,000원 할인 쿠폰</Text>
                    </CheckBox>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <Text variant="body-2">만료일: 2024년 11월 30일</Text>
                    <Text variant="body-2">만료일: 2024년 11월 30일</Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    borderTop: "1px solid #E0E0E0",
                    paddingTop: "16px",
                  }}
                >
                  <div>
                    <CheckBox isChecked={false} onClick={() => {}}>
                      <Text variant="title-2">5,000원 할인 쿠폰</Text>
                    </CheckBox>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <Text variant="body-2">만료일: 2024년 11월 30일</Text>
                    <Text variant="body-2">만료일: 2024년 11월 30일</Text>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="primary" size="full" onClick={() => {}}>
              총 6,000원 할인 쿠폰 사용하기
            </Button>
          </Modal.Content>
        </Modal>
      )}
    </S.Container>
  );
};

export default OrderConfirmPage;
